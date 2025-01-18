/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
         '2md':'960px'
      },
      spacing: {
        '34': '8.5rem', 
        '37':'9.25rem',
        
    },
      colors:{
        secondary_text_color:"#737373",
        base_color:"#252B42",
        primary_color:"#96BB7C",
      faded_primary_color:"#EFF8ED",
      danger_color:'#E74040',
      gray_color:'#BDBDBD',
      orange_color:'#FFAB71',
      dark_color:'#2D4059',
      baby_blue:'#8EC2F2',
      baby_pink:'#FFF2F3',
      white_color:'#FAFAFA',
      }
    },
  },
  plugins: [],
}