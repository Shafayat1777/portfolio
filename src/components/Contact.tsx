"use client";

import SectionHeading from "./section-heading";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useActionState, useEffect, useState } from "react";
import SubmitButton from "@/ui/submitButton";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [state, formAction, pending] = useActionState(sendEmail, null);

  const [errors, setErrors] = useState<object>({});

  // useEffect(() => {
  //   if (state?.errors) {
  //     toast.warn(state?.message);
  //     setErrors(state?.errors);
  //   }

  //   if (state?.success) {
  //     toast.success("Registration Success! Redirecting to login page...");
  //     setSuccess(true);
  //     // Delay the redirection by 3 seconds (3000 milliseconds)
  //     const timer = setTimeout(() => {
  //       router.push("/login");
  //     }, 2000);

  //     // Cleanup timer when component unmounts or state changes
  //     return () => clearTimeout(timer);
  //   }
  // }, [state]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 sm:mb-40 scroll-mt-28 flex flex-col items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="w-[min(100%,38rem)]">
        <SectionHeading>Contact</SectionHeading>
        <p className="text-white text-center">
          Please contact me directly at{" "}
          <a
            href="mailto:shafayat1777@gmail.com"
            className="underline text-primary-light"
          >
            shafayat1777@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form action={formAction} className="flex flex-col gap-3 mt-8">
          <input
            name="senderEmail"
            placeholder="Your email"
            type="email"
            required
            className="h-14 p-4 border border-secondary-dark bg-tertiary-dark"
          />
          <textarea
            name="message"
            required
            placeholder="Your message..."
            className="border border-secondary-dark bg-tertiary-dark h-52 p-4"
          />
          <SubmitButton text="Send" pending={pending} />
        </form>
      </div>
    </motion.section>
  );
}
