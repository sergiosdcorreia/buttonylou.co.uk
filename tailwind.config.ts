import type { Config } from "tailwindcss";
import fluid, { extract } from 'fluid-tailwind'

export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract
  },
  theme: {
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
