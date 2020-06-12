import React from "react";
import { render } from "@testing-library/react";
import StarRating from "components/Rater/StarRating";

describe("StarRating", () => {
  it("should render", () => {
    const { container } = render(<StarRating />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should change selected stars on click", () => {
    let { container } = render(<StarRating totalStars={5} />);
    container = container.firstChild;
    // Initial rating
    let stars = container.querySelectorAll(".star");
    let starsSelected = container.querySelectorAll(".star.selected");
    expect(stars.length).toEqual(5);
    expect(starsSelected.length).toEqual(0);

    // Rate 4 stars
    stars[3].click();
    starsSelected = container.querySelectorAll(".star.selected");
    expect(starsSelected.length).toEqual(4);
  });
});
