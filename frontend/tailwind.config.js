/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "outline": "#99907c",
        "surface": "#131313",
        "surface-container-highest": "#353534",
        "on-secondary": "#492905",
        "tertiary-fixed": "#e5e2db",
        "surface-container-lowest": "#0e0e0e",
        "surface-variant": "#353534",
        "on-secondary-fixed-variant": "#633f19",
        "outline-variant": "#4d4635",
        "tertiary": "#d1cec8",
        "error-container": "#93000a",
        "error": "#ffb4ab",
        "primary-fixed-dim": "#e9c349",
        "on-error-container": "#ffdad6",
        "secondary-fixed-dim": "#f1bc8c",
        "tertiary-container": "#b5b3ad",
        "primary-fixed": "#ffe088",
        "on-surface": "#e5e2e1",
        "surface-dim": "#131313",
        "surface-container": "#201f1f",
        "on-secondary-fixed": "#2d1600",
        "on-surface-variant": "#d0c5af",
        "primary": "#f2ca50",
        "on-primary-container": "#554300",
        "on-primary-fixed": "#241a00",
        "secondary-fixed": "#ffdcbf",
        "surface-container-low": "#1c1b1b",
        "on-background": "#e5e2e1",
        "on-tertiary": "#31312c",
        "on-primary-fixed-variant": "#574500",
        "secondary": "#f1bc8c",
        "tertiary-fixed-dim": "#c9c6c0",
        "inverse-on-surface": "#313030",
        "on-error": "#690005",
        "on-tertiary-fixed-variant": "#474742",
        "background": "#131313",
        "inverse-primary": "#735c00",
        "on-secondary-container": "#e2ae7f",
        "secondary-container": "#66411b",
        "surface-bright": "#393939",
        "surface-tint": "#e9c349",
        "surface-container-high": "#2a2a2a",
        "inverse-surface": "#e5e2e1",
        "on-tertiary-container": "#464540",
        "primary-container": "#d4af37",
        "on-primary": "#3c2f00",
        "on-tertiary-fixed": "#1c1c18"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "32px",
        "container-max": "1280px",
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        "base": "8px",
        "section-gap": "80px"
      },
      "fontFamily": {
        "headline-xl": ["Playfair Display"],
        "label-md": ["Hanken Grotesk"],
        "headline-lg-mobile": ["Playfair Display"],
        "body-md": ["Hanken Grotesk"],
        "headline-md": ["Playfair Display"],
        "headline-lg": ["Playfair Display"],
        "body-lg": ["Hanken Grotesk"]
      },
      "fontSize": {
        "headline-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "headline-lg": ["48px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
      },
      "animation": {
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      },
      "keyframes": {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "rotate-slow": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" }
        },
        "fade-up": {
          "from": { opacity: "0", transform: "translateY(30px)" },
          "to": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
}
