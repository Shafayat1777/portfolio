"use client";

import SectionHeading from "./section-heading";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useActionState, useEffect } from "react";
import SubmitButton from "@/ui/submitButton";
import toast from "react-hot-toast";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { ActionState, EmailErrorDetails } from "@/lib/types";



export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [state, formAction, pending] = useActionState<ActionState<EmailErrorDetails>>(sendEmail, null);

  useEffect(() => {
    if (state?.success === false) {
      toast(state?.message, {
        icon: <MdError size={30} className="text-red-500" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast(state?.message, {
        icon: <FaCheckCircle size={30} className="text-green-500" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [state]);

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
            type="text"
            // required
            className="h-14 p-4 border border-secondary-dark bg-tertiary-dark"
          />
          {state?.type === "validation_error" &&
            state?.details?.senderEmail && (
              <p>{state?.details?.senderEmail.join(", ")}</p>
            )}
          <textarea
            name="message"
            // required
            placeholder="Your message..."
            className="border border-secondary-dark bg-tertiary-dark h-52 p-4"
          />
          {state?.type === "validation_error" && state?.details?.message && (
            <p>{state?.details?.message.join(", ")}</p>
          )}
          <SubmitButton text="Send" pending={pending} />
        </form>
      </div>
    </motion.section>
  );
}
