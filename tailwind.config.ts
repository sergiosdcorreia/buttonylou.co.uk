import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    fluid
  ],
} satisfies Config;
