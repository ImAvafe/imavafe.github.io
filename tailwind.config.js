import daisyui from "daisyui"
import typography from "@tailwindcss/typography"
import themes from "daisyui/src/theming/themes"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'serif'],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#9F84FF',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              'font-size': '2rem',
            },
            h2: {
              'font-size': '1.8rem',
            },
            h3: {
              'font-size': '1.4rem',
            },
          },
        },
      })
    },
  },
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes["dark"],
          primary: "#9F84FF",
          secondary: "white",
          neutral: "#292929",
          "base-100": "#000000",
        },
        light: {
          ...themes["light"],
          primary: "#9F84FF",
          secondary: "white",
          neutral: "#292929",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

