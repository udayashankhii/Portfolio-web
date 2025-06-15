import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      animation: { 
        float: "float 6s ease-in-out infinite",
        "float-delay-1": "float 6s ease-in-out infinite 2s",
        "float-delay-2": "float 6s ease-in-out infinite 4s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
});
