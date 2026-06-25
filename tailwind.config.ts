import type { Config } from "tailwindcss";

const config: Config = {
  // Directs Tailwind to scan application layers for active layout styles
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sets up a responsive, clean sans font baseline tailored for tall screens
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    // Injects a localized configuration modifier to strip default desktop scrollbars
    function ({ addUtilities }: any) {
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none",       /* Compatibility fallback target for legacy Edge */
          "scrollbar-width": "none",          /* Compatibility fallback target for modern Firefox */
          "&::-webkit-scrollbar": {
            display: "none",                  /* Suppresses default visual scroll gutters on Safari/Chrome */
          },
        },
      });
    },
  ],
};
export default config;