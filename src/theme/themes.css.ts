import { createTheme } from "@vanilla-extract/css";
import { colors } from "./contracts/colors.css";

export const darkTheme = createTheme(colors, {
  background: "#282a36",
  text: {
    primary: "#f8f8f2",
    secondary: "#ff79c6",
  },
  primary: "#ff79c6",
  secondary: "#bd93f9",
  success: "##50fa7b",
  info: "#8be9fd",
  warning: "#ffb86c",
  error: "#ff5555",
});

export const lightTheme = createTheme(colors, {
  background: "#f8f8f2",
  text: {
    primary: "#ff79c6",
    secondary: "#282a36",
  },
  primary: "#ff79c6",
  secondary: "#bd93f9",
  success: "##50fa7b",
  info: "#8be9fd",
  warning: "#ffb86c",
  error: "#ff5555",
});
