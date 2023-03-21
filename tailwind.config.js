module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': [
          'Baskervville', 
          'Georgia',
          'Times New Roman', 
          'Times', 
          'serif'
        ],
        'body': [
          'Plus Jakarta Sans', 
          'Arial', 
          'sans-serif'
        ],
      }  
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

