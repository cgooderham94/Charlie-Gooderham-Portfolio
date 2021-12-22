import { ColorThemeSwitch } from "../ColorThemeSwitch";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ColorThemeSwitch", () => {
  it("toggles checked/unchecked when clicked", () => {
    render(<ColorThemeSwitch />);

    const colorThemeSwitch = screen.getByRole("switch", {
      name: /toggle dark mode/i,
    });

    expect(colorThemeSwitch).toBeInTheDocument();
    userEvent.click(colorThemeSwitch);

    expect(colorThemeSwitch).toBeChecked();
  });
});
