import { Headline } from "../Headline";
import { render, screen } from "@testing-library/react";

describe("Headline", () => {
  it("displays correct heading text", () => {
    render(
      <Headline text={["Test string 1", "Another test string, right here."]} />
    );

    expect(
      screen.getByRole("heading", {
        name: "Test string 1 Another test string, right here.",
      })
    ).toBeInTheDocument();
  });
});
