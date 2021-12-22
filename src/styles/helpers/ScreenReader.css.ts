import { style } from "@vanilla-extract/css";

export const screenReaderContent = style({
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
});
