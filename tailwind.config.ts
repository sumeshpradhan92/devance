import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#C84B1F",
          light: "#E8623A",
          50: "#FDF3EF",
          100: "#FAE0D5",
          200: "#F4C0A8",
          300: "#EC9A75",
          400: "#E8623A",
          500: "#C84B1F",
          600: "#A33B16",
          700: "#7D2D10",
          800: "#571F0B",
          900: "#321105",
        },
        terracotta: "#E8A87C",
        cream: {
          DEFAULT: "#FAF6EF",
          dark: "#F0E9DC",
        },
        ink: {
          DEFAULT: "#2C1810",
          light: "#5C3D2E",
        },
        gold: "#D4A853",
        forest: "#2D5016",
        dust: "#B8956A",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        deva: ["Noto Serif Devanagari", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(48px, 8vw, 96px)", { lineHeight: "1.02" }],
        "display-lg": ["clamp(40px, 6vw, 72px)", { lineHeight: "1.05" }],
        "display-md": ["clamp(32px, 4vw, 52px)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(24px, 3vw, 36px)", { lineHeight: "1.25" }],
      },
      spacing: {
        "section": "100px",
        "section-sm": "64px",
      },
      borderRadius: {
        "card": "8px",
        "pill": "100px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(44, 24, 16, 0.08)",
        "card-hover": "0 20px 48px rgba(44, 24, 16, 0.14)",
        "saffron": "0 8px 32px rgba(200, 75, 31, 0.30)",
        "saffron-lg": "0 16px 48px rgba(200, 75, 31, 0.40)",
      },
      backgroundImage: {
        "gradient-saffron": "linear-gradient(135deg, #C84B1F 0%, #E8623A 100%)",
        "gradient-ink": "linear-gradient(160deg, #2C1810 0%, #3d1f12 100%)",
        "gradient-cream": "linear-gradient(135deg, #FAF6EF 0%, #F0E9DC 100%)",
        "dot-pattern": "radial-gradient(#B8956A 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot": "24px 24px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 20s linear infinite",
        "pulse-saffron": "pulseSaffron 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
        pulseSaffron: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 75, 31, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(200, 75, 31, 0)" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;