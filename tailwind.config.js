
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         cream: "#f9f7f1",       // svetla podloga
        beige: "#d6bfaf",       // nežna, topla bež
        dustyRose: "#b18c88",   // akcent u ružičasto-braon tonu
        dark: "#333333",        // tamni tekst
        gold: "#c5a25f",        // luksuzni zlatni detalji
        primary: "#1B2A52",     // kraljevsko plava
        white: "#ffffff",       // bela
        lightHover: '#fcf4ff',
        darkHover : '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily : {
      Poppins: ["Poppins", "sans-serif"],
        Playfair_Display: ["Playfair Display", "serif"],
        Lato: ["Lato", "sans-serif"]
      },
      screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         '2xl': '1536px',
   
  },
    gridTemplateColumns:{
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
    }
    },
    

    
  },
  plugins: [],
}
