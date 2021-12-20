import { style } from "@vanilla-extract/css";
import { themeVars } from "../../theme/index.css";

export const headline = style({
  width: "100%",
  /* TODO: Don't really want to apply context-specific style here. Find a workaround. */
  marginTop: "auto",
  /* Min vw 450px | Max vw 1200px
    Calc from https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */
  fontSize: "clamp(2rem, 1.1rem + 3.2vw, 3.5rem)",

  "@media": {
    "screen and (min-width: 450px)": {
      maxWidth: "75%",
    },
  },
});

export const headlineSpan = style({
  display: "block",
  marginBottom: "1rem",
});
