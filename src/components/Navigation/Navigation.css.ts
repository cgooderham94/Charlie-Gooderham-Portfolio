import { style } from "@vanilla-extract/css";

export const navbar = style({
  display: "flex",
  justifyContent: "space-between",
  // maxWidth: var(--container-size),
  margin: "0 auto",
  padding: "0 1rem",
});

export const navListWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const navList = style({
  display: "flex",
  justifyContent: "flex-end",
  flexWrap: "wrap",
});
