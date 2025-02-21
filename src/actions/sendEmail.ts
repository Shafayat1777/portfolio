"use server";
import { Resend } from "resend";
import z from "zod";
import ReactMail from "@/email/react-mail";
import React from "react";
import { EmailErrorDetails } from "@/lib/types";

const formSchema = z.object({
  senderEmail: z.string().email(),
  message: z.string().min(1).max(5000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: unknown,
  formData: FormData
): Promise<{
  success: boolean;
  type: string;
  message: string;
  details?: EmailErrorDetails;
}> {
  const senderEmail = formData.get("senderEmail") ?? undefined;
  const message = formData.get("message") ?? undefined;

  const result = formSchema.safeParse({ senderEmail, message });

  try {
    if (!result.success) {
      console.log(result.error.flatten().fieldErrors);
      return {
        success: false,
        type: "validation_error",
        message: "Validation failed",
        details: result.error.flatten().fieldErrors,
      };
    }

    const { error } = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: "shafayat1777@gmail.com",
      subject: "Hello World",
      replyTo: result.data.senderEmail,
      react: React.createElement(ReactMail, {
        message: result.data.message,
        senderEmail: result.data.senderEmail,
      }),
    });

    if (error) {
      return {
        success: false,
        type: "resend_error",
        message: "Email failed to send. Domain is not verified!",
      };
    }

    return {
      success: true,
      type: "success",
      message: "Email sent successfully!",
    };
  } catch (error: unknown) {
    return {
      success: false,
      type: "unknown_error",
      message: "An unexpected error occurred",
      details: error || undefined,
    };
  }
}
