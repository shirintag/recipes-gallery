import React from "react";
import { render } from "@testing-library/react";
import Heart from "components/Heart/Heart";

describe("Heart", () => {
  it("should render", () => {
    const { container } = render(<Heart />);
    expect(container).toMatchSnapshot();
  });

  it("should change class on click", () => {
    let { container } = render(<Heart />);
    container = container.firstChild.firstChild;
    expect(container.className).toEqual("heart");

    container.click();
    expect(container.className).toEqual("heart selected");
  });
});
