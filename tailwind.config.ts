import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--body-background)",
        foreground: "var(--foreground)",
        esxmain: "var(--esx-main-color)",
        darker1: "var(--esx-darker1)",
        darker2: "var(--esx-darker2)",
        lighter: "var(--lighter)",
        progresscolor: "var(--progress-color)",
        bodybackground: "var(--body-background)",
        bodybackground2: "var(--body-background2)",
      },
      maxWidth: {
        contentwidth: "1200px", // width for content
        bodywidth: "1400px", // width for body
      },
      maxHeight: {
        navheight: "98px",
      },
      fontSize: {
        navlink1: ["20px", { fontWeight: "700" }], // bold
        navlink2: ["20px", { fontWeight: "400" }], // regular
        herotitle: ["60px", { fontWeight: "700" }], // bold
        herotitle2: ["40px", { fontWeight: "700" }], // bold
        herodescription: ["16px", { fontWeight: "400" }], // regular
        herodescription2: ["25px", { fontWeight: "400" }], // regular
      },
      leading: {
        herolineheight: ["4.5rem"],
      },
    },
  },
  plugins: [],
};

export default config;
