const breakpoints = [320, 768, 1024];

export default {
  breakpoints: breakpoints.map(point => `${point}px`),
  mediaQueries: {
    mobile: `@media screen and (max-width: ${breakpoints[1]}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px) and (max-width: ${breakpoints[2] - 1}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },
  colors: {
    buttonPrimary: "#0000ff",
    cardPrimary: "#dcd8d8",
    textPrimary: "#1c1919",
    textSecondary: "#afafaf",
    textTertiary: "#afafaf",
    simpleBlack: "#000000",
    simpleWhite: "#ffffff",
    overlay40: "rgba(0, 0, 0, 0.4)",
  },
  zIndices: {
    overlay: 1,
    modal: 2,
  },
  space: Array.from({ length: 51 }, (_, i) => i * 4),
  typography: {
    h1: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 700,
      fontSize: "34px",
      lineHeight: "36px",
      letterSpacing: "-0.100px",
    },
    h2: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "32px",
      letterSpacing: "-0.200px",
    },
    h3: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "28px",
      letterSpacing: "-0.300px",
    },
    body1Regular: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.300px",
    },
    body1Semibold: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.300px",
    },
    body2Regular: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "-0.300px",
    },
    body2Semibold: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "-0.300px",
    },
  },
};
