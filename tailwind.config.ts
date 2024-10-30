import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-bottom-right": "5px 5px 8px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btn_bg: "#F0F0F0",
        signin_bg: "#FFFFFF",
        link_btn: "#0045FF",
      },
    },
  },
  plugins: [],
};
export default config;
