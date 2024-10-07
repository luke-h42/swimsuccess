/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {sans: ["Open Sans", "sans-serif"]},
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/homepage-background-swimmer-m.jpg')",
        desktop: "url('/src/assets/homepage-background-swimmer-d.jpg')",
        tablet: "url('/src/assets/homepage-background-swimmer-t.jpg')",
        fallback: "url('/src/assets/homepage-background-swimmer-m.jpg')",
      },
       colors: {
        primary: '#017DAB',
        primary100: '#D5F3FF',
        primary200: '#ABE8FF',
        primary300: '#81DCFE',
        primary400: '#57D1FE',
        primary500: '#2DC5FE',
        primary600: '#03BAFE',
        primary700: '#019CD5',
        primary800: '#01688E',
        basewhite: '#FAFAFA',
        neutrals100: '#e3e3e3',
        neutrals200: '#CCCBCB',
        neutrals300: '#B5B3B3',
        neutrals400: '#9F9C9C',
        baseblack: '#0A0A0B'
      },

    },
  },
  plugins: [],
}
