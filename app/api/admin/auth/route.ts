import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    // In a real app, sign a JWT here. For now, we set a simple secure cookie.
    cookies().set("admin_token", "authorized", {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}