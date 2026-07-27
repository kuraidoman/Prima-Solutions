import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, position, message } = req.body ?? {};

  if (!email || !position || !message) {
    return res.status(400).json({ error: "Email, position, and message are required" });
  }

  try {
    await resend.emails.send({
      from: "Prima Solution Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO || "primastruct.engineering@gmail.com",
      replyTo: email,
      subject: `New job application - ${position}`,
      text: `From: ${email}\nPosition: ${position}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send careers email:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
