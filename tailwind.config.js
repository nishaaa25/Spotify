module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "black":"#000000",
      "black-light":"#121212",
      "green":"#1ed760",
      "green-light":"#1fdf64",
      'gray-dark': '#a7a7a7',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "white":"#fff"
    },
    extend: {
      fontSize:{
        "sm": "14px",
        "base":"16px",
        "md":"18px",
        "lg":"20px",
        "xl":"24px",
        "2xl":"28px",
        "3xl":"36px",
        "4xl":"44px",
      },
      borderRadius:{
        "sm": "8px",
        "md": "16px",
        "lg": "20px"
      }
    },
  },
  plugins: [],
}