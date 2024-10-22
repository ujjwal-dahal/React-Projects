module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this includes your JSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
