import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme("#root", {
  spacing: {
    1: "0.125rem",
    2: "0.25rem",
    3: "0.5rem",
    4: "1rem",
    5: "2rem",
    6: "4rem",
    7: "8rem",
  },
  font: {
    family: {
      primary: "'IBM Plex Mono', monospace",
      // Currently no requirement for secondary font
      secondary: "'IBM Plex Mono', monospace",
    },
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    lg: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    xl: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xxl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    xxxl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
});
