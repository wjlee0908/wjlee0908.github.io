import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/app/**/*.{tsx, html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display1: ["56px", { lineHeight: "72px", letterSpacing: "-0.0319em" }],
        display2: ["40px", { lineHeight: "52px", letterSpacing: "-0.0282em" }],
        title1: ["36px", { lineHeight: "48px", letterSpacing: "-0.027em" }],
        title2: ["28px", { lineHeight: "38px", letterSpacing: "-0.0236em" }],
        title3: ["24px", { lineHeight: "32px", letterSpacing: "-0.023em" }],
        heading1: ["22px", { lineHeight: "30px", letterSpacing: "-0.0194em" }],
        heading2: ["20px", { lineHeight: "28px", letterSpacing: "-0.012em" }],
        headline1: ["18px", { lineHeight: "26px", letterSpacing: "-0.002em" }],
        headline2: ["17px", { lineHeight: "24px", letterSpacing: "0em" }],
        body1: ["16px", { lineHeight: "24px", letterSpacing: "0.0057em" }],
        body1Reading: [
          "16px",
          { lineHeight: "26px", letterSpacing: "0.0057em" },
        ],
        body2: ["15px", { lineHeight: "22px", letterSpacing: "0.0096em" }],
        body2Reading: [
          "15px",
          { lineHeight: "24px", letterSpacing: "0.0096em" },
        ],
        label1: ["14px", { lineHeight: "20px", letterSpacing: "0.0145em" }],
        label1Reading: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0.0145em" },
        ],
        label2: ["13px", { lineHeight: "18px", letterSpacing: "0.0194em" }],
        caption1: ["12px", { lineHeight: "16px", letterSpacing: "0.0252em" }],
        caption2: ["11px", { lineHeight: "14px", letterSpacing: "0.0311em" }],
      },
    },
  },
  plugins: [],
};

export default config;
