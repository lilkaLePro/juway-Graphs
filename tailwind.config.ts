import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-home": "linear-gradient(0deg, rgba(2,6,23,1) 0%, rgba(0,139,139,1) 100%);",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "dark" : "#020617",
        "dark-green" : "#052E16",
        "light-green" : "#6EE7B7",
        "yellow" : "#EAB308",
        "muted-color" : "#737373",
        "dark-blue" : "#008B8B"
      },
    },
  },
  plugins: [],
};
export default config;
