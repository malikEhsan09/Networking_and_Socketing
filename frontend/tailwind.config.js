/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "background-dark-theme": "#12182a",
        "text-primary-text": "#fff",
        gray: {
          100: "#fbfbfb",
          200: "#fafafa",
          300: "#797979",
          400: "#1a2239",
          500: "#162240",
          600: "#1a1a1a",
          700: "#0f121e",
        },
        dimgray: "#585858",
        "action-button-color": "#4285f4",
        whitesmoke: "#e9e9e9",
        lawngreen: "#49e202",
        "dark-1-dark": "#202020",
        red: "#f90807",
        "dark-3-dark": "#84818a",
        "text-secondary-text": "#9a9ba1",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "41xl": "60px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      "3xs": "10px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animate")],
};
