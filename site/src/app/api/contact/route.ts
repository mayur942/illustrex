import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Name, email, and project brief are required." },
      { status: 400 },
    );
  }

  // Replace this with Resend (or another provider) once email delivery is configured.
  console.log("[Contact Inquiry]", {
    name: body.name,
    email: body.email,
    company: body.company ?? "",
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
