import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "abc-diatype": ["ABC Diatype Semi-Mono", "monospace"],
      },
      colors: {
        "sentry-dark": "#000000",
        "sentry-teal": "#395B64",
        "sentry-light-teal": "#A5C9CA",
        "sentry-mint": "#E7F6F2",
        "sentry-sage": "#A4C893", // Warna diperbarui agar cocok
        "sentry-blue-gray": "#92BAC1",
        "sentry-accent": "#09B0B6",
        "sentry-footer": "#2C3333",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Animasi baru ditambahkan di sini
        "pulse-eye": {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(0.8)",
            opacity: "0.7",
            boxShadow: "0 0 15px 7px rgba(164, 200, 147, 0.3), 0 0 25px 15px rgba(164, 200, 147, 0.2)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
            boxShadow: "0 0 25px 15px rgba(164, 200, 147, 0.5), 0 0 40px 25px rgba(164, 200, 147, 0.3)",
          },
        },
        "wave": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Animasi baru ditambahkan di sini
        "pulse-eye": "pulse-eye 3s ease-in-out infinite",
        "wave": "wave 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
