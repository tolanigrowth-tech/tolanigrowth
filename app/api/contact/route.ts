import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("New contact submission:", body);

    // To send real emails later, plug in Resend here:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "TolaniGrowth <hello@tolanigrowth.com>",
    //   to: "Tolanigrowth@gmail.com",
    //   subject: `New demo request from ${body.name}`,
    //   text: JSON.stringify(body, null, 2),
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
