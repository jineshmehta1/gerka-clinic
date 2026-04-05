import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Signature error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const appointmentId = session.metadata?.appointmentId;

      if (!appointmentId) return NextResponse.json({ received: true });

      const appointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
      });

      if (!appointment) return NextResponse.json({ received: true });

      // 🔐 SECURITY CHECKS
      if (appointment.stripeSessionId !== session.id) {
        console.error("❌ Session mismatch");
        return NextResponse.json({ received: true });
      }

      if (session.amount_total !== appointment.amount * 100) {
        console.error("❌ Amount mismatch");
        return NextResponse.json({ received: true });
      }

      if (appointment.status !== "PAID") {
        await prisma.appointment.update({
          where: { id: appointmentId },
          data: { status: "PAID" },
        });
      }

      console.log("✅ Payment updated via webhook");
    }

  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}