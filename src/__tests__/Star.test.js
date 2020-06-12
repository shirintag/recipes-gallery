import React from "react";
import { render } from "@testing-library/react";
import Star from "components/Rater/Star";

describe("Star", () => {
  it("should render", () => {
    const { container } = render(<Star />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should change class based on props", () => {
    var { container } = render(<Star selected={false} />);
    container = container.firstChild;
    expect(container.firstChild.className).toEqual("star");

    var { container } = render(<Star selected={true} />);
    container = container.firstChild;
    expect(container.firstChild.className).toEqual("star selected");
  });
});
