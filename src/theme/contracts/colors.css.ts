import { createThemeContract } from "@vanilla-extract/css";

export const colors = createThemeContract({
  background: null,
  text: {
    primary: null,
    secondary: null,
  },
  primary: null,
  secondary: null,
  success: null,
  info: null,
  warning: null,
  error: null,
});
