import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./theme/index.css";

globalStyle("body", {
  margin: "0",
});

export const appStyle = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0",
  color: themeVars.colors.text.primary,
  backgroundColor: themeVars.colors.background,
  fontFamily: themeVars.font.family.primary,
  transition: "color ease-in-out 0.3s",
});
