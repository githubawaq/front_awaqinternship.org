module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla
      "sm": { max: "640px" },
      "md": { min: "641px", max: "768px" },
      "lg": { min: "769px", max: "1024px" },
      "xl": { min: "1025px", max: "1280px" },
      "2xl": { min: "1281px" },
    },
    extend: {
      colors: {
        // se establecen colores a usar
        "turquoise-blue": "#1A858E",
        "grey": "#355456",
        "grey-clear": "#7B8FA1",
        "white": "#ffffff",
        "green": "#74B62E",
      },
      fontFamily: {
        // aca se agregan los tipos de furntes a usar
        custom: ["Montserrat", "sans-serif"],
        nanum: ["Nanum Pen Script", "cursive"],
      },
      fontSize: {
        // tamaños de letras con su espaciador entre lineas
        "sm": ["0.875rem", { lineHeight: "1.1" }],
        "base": ["1rem", { lineHeight: "1.2" }],
        "lg": ["1.125rem", { lineHeight: "1.3" }],
        "xl": ["1.25rem", { lineHeight: "1.4" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.5" }],
        "4xl": ["2.25rem", { lineHeight: "1.6" }],
        "5xl": ["3rem", { lineHeight: "1.6" }],
        "6xl": ["3.75rem", { lineHeight: "1.7" }],
        "7xl": ["4.5rem", { lineHeight: "1.7" }],
        "8xl": ["6rem", { lineHeight: "1.7" }],
        "9xl": ["8rem", { lineHeight: "1.8" }],
      },
      lineHeight: {
        // espaciador de lineas para parrafos
        "tight": 1.1,
        "normal": 1.5,
        "loose": 2,
      },
    },
  },
  variants: {},
  plugins: [],
};
