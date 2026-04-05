import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { 
  apiVersion: "2023-10-16" 
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic Validation: Ensure all data is present
    if (!data.service || !data.name || !data.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save to Neon Database
    // Ensure your prisma schema model name matches "appointment"
    const appointment = await prisma.appointment.create({
      data: {
        service: data.service.title,
        amount: Number(data.service.fee), // Ensure it's a number
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message || "",
      },
    });

    // 2. Create Stripe Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "eur",
          product_data: { 
            name: `Gerka Clinic - ${data.service.title}`,
            description: `Deposit for ${data.name}`
          },
          unit_amount: Math.round(data.service.fee * 100), // Ensure it's an integer in cents
        },
        quantity: 1,
      }],
      mode: "payment",
      metadata: { 
        appointmentId: appointment.id 
      },
      // IMPORTANT: Ensure these env variables are set in your .env
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#booking`,
    });

    // Return the URL for the frontend to redirect
    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("STRIKE/PRISMA ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" }, 
      { status: 500 }
    );
  }
}