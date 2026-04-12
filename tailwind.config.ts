import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f1721",
        steel: "#3c5264",
        sand: "#e8dfd1",
        mist: "#dfe6e0",
        clay: "#ad7d57",
        ember: "#c65d31"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      maxWidth: {
        grid: "1440px"
      },
      boxShadow: {
        panel: "0 25px 70px rgba(15, 23, 33, 0.12)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 30%), radial-gradient(circle at 80% 0%, rgba(198,93,49,0.12), transparent 25%), linear-gradient(135deg, rgba(15,23,33,0.96), rgba(27,42,54,0.88))"
      }
    }
  },
  plugins: []
};

export default config;
