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
        primary: "#457B9D",
        secondary: "#fbfbfb",
        default: "#aeabb9",
        button: "#b0a192",
        info: "#50597c",
        success: "#7c9967",
        warning: "#fa892f",
        danger: "#f44336",
      },
    },
  },
  plugins: [],
} satisfies Config;
