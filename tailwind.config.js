/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {  // Make sure the property is correctly named if using Tailwind CSS v3+
        'half': 'inset(0 0 0 50%)',
      },
      colors: {
          'customBlue': 'rgb(50, 121, 148)',
          'tealblue': '#327994',
          'dengoorange': '#CF2D21',
          'hoverdengo':'#F40D15',
          'textgray':'#6B6C70',
          'lightgray':'#F3F3F3',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
          'cornblue':'#2084B1',
          'lightcornblue':'#EDF6FE',
          'bordergray':'#C3C3C3',
          'buttonred':'#CF2D21',
          'Customgreen':'#023020',
          'dengologored':'#FE5757'

        },
    },
  },
  plugins: [],
}
