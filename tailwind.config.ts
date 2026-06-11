import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f0f",
        surface: "#1a1a1a",
        border: "#2a2a2a",
        neon: {
          purple: "#a855f7",
          cyan: "#06b6d4",
          glow: "#7c3aed",
        },
        muted: "#6b7280",
        body: "#d1d5db",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 8px #a855f7" },
          "50%": { boxShadow: "0 0 24px #a855f7, 0 0 48px #06b6d4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
