/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d4bba4", // Keep base, potentially refine to #decab2
          dark: "#bc9f84",
          light: "#e8d6c4",
        },
        background: {
          light: "#0b2e31", // Base dark teal
          dark: "#061c1e", // Darker shade for depth
          card: "#12393d", // Slightly lighter for cards
        },
        surface: "#12393d",
        accent: "#e6d5c3",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(212,187,164,0.45)",
        "glow-lg": "0 0 90px -20px rgba(212,187,164,0.55)",
        card: "0 20px 60px -20px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.7s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
