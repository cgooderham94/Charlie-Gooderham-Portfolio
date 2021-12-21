export const joinClasses = (classes: unknown[]) =>
  classes.filter((e) => typeof e === "string" && !!e).join(" ");
