module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: false,
  theme: {
    screens: { // puntos de interruccion tamaño de pantalla
      'sm': {'max': '640px'},
      'md': {'min': '641px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1024px'},
      'xl': {'min': '1025px', 'max': '1280px'},
      '2xl': {'min': '1281px'},
    },
    extend: {
      colors: { // se establecen colores a usar
        'turquoise-blue': '#1A858E', 
        'grey': '#355456',
        'grey-clear': '#E9F1F1',
        'white': '#ffffff',
        'green': '#74B62E',

      },
      fontFamily: { // aca se agregan los tipos de furntes a usar
        custom: ['sans-serif'], 
      },
      fontSize: { // tamaños de letras con su espaciador entre lineas
        'sm': ['0.875rem', { lineHeight: '1' }],
        'base': ['1rem', { lineHeight: '1' }],
        'lg': ['1.125rem', { lineHeight: '1' }],
        'xl': ['1.25rem', { lineHeight: '1' }],
        '2xl': ['1.5rem', { lineHeight: '1' }],
        '3xl': ['1.875rem', { lineHeight: '1' }],
        '4xl': ['2.25rem', { lineHeight: '1' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      lineHeight: { // espaciador de lineas para parrafos
        'tight': 1.1,
        'normal': 1.5,
        'loose': 2,
      },
    }
  },
  variants: {},
  plugins: [],
};
