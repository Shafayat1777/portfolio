import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09122C",
        // foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#BE3144", // The default shade
          light: "#E17564", // Lighter shade
          dark: "#872341", // Darker shade 
        },
        secondary: {
          DEFAULT: "#59CE8F",
          light: "#FFF574",
          dark: "#7E5CAD",
        },
        tertiary: {
          DEFAULT: "#EDF4C2",
          light: "#F93827",
          dark: "#2A004E",
        },
        error: "#EF4444",
      },
    },
  },
  plugins: [],
} satisfies Config;
