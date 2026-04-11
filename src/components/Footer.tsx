"use client";


export default function Footer() {
  return (
    <footer className="mt-20 mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <div className="max-w-[28rem] mx-auto border-t border-black/5 dark:border-white/10 pt-8">
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Live & Active
          </p>
        </div>

        <small className="block mb-2 text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold dark:text-white">Shafayat.</span>
          All rights reserved.
        </small>

        <p className="text-[10px] leading-relaxed max-w-[22rem] mx-auto">
          <span className="font-semibold text-gray-800 dark:text-gray-300">
            About this website:
          </span>{" "}
          built with React & Next.js (App Router), TypeScript, Tailwind CSS,
          Framer Motion, and deployed on VPS.
        </p>
      </div>
    </footer>
  );
}
