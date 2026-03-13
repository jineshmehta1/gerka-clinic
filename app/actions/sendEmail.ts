"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendGerkaInquiry(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const treatment = formData.get("treatment") as string;
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: "Gerka Clinic Inquiry <onboarding@resend.dev>",
      to: ["hello@gerkaclinic.com"], // Update to your real email
      subject: `New Inquiry: ${treatment} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #18181b; font-weight: 300; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Website Inquiry</h2>
          <p style="margin-bottom: 10px;"><strong>Client Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 10px;"><strong>Interest:</strong> ${treatment}</p>
          <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; color: #444;">
            ${message}
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #a1a1aa;">
            Sent from Gerka Clinic Website Contact Form
          </footer>
        </div>
      `,
    });

    if (error) return { success: false, error };
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}