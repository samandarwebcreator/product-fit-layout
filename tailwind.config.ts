import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "25px",
      screens: {
        sm: "410px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        "brand-color": "#1E959B",
        "button-color": "#F05670",
        "button-hover": "#f23d3d",
        "inactive-span": "#D7EFF0",
        "openGift-background": "#dddddd76",
        "openGift-color": "#3C3C3C",
      },
      boxShadow: {
        "openGift-shadow": "0px 6px 18px 0px rgba(30, 149, 155, 1)",
        "button-shadow": " 0px 2px 8px -3px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
export default config;
