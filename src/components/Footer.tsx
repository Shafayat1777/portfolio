import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center">
      <small className="block mb-2 ">
        &copy; 2030 Ricoco. All rights reserved.
      </small>
      <p className="mb-2 text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React-Hot-Toast, React Email & Resend and deployed on
        VPS.
      </p>
    </footer>
  );
}
