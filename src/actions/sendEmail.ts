"use server";
import { Resend } from "resend";
import z from "zod";

const formSchema = z.object({
  senderEmail: z.string().email(),
  message: z.string().min(1).max(5000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") ?? undefined;
  const message = formData.get("message") ?? undefined;

  const result = formSchema.safeParse({ senderEmail, message });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Email send Failed!",
    };
  }

  const { data, error } = await resend.emails.send({
    from: "My Portfolio <onboarding@resend.dev>",
    to: "shafayat1777@gmail.com",
    subject: "Hello World",
    replyTo: result.data.senderEmail,
    text: result.data.message,
  });

  if (error) {
    return {
      errors: error,
      message: "Email send Failed!",
    };
  }

  return {
    data,
    message: "Email send Successfully!",
  };
}
