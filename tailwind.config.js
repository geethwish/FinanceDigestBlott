module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#523AE4",
        secondary: "#b6adf2",
        danger: "#e74c3c",
        textPrimary: "#171717",
        textSecondary: "#737373",
      },
    },
    fontFamily: {
      robotoSans: ["Roboto", "sans-serif"],
      RalewaySans: ["Raleway", "sans-serif"],
      RubikSans: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
  },
  plugins: [],
};
