import React from "react";
import { render } from "@testing-library/react";

import RecipeCard from "../components/RecipeCard/RecipeCard";
const RecipeData = {
  calories: "516 kcal",
  headline: "with Sweet Potato Wedges and Minted Snap Peas",
  id: "533143aaff604d567f8b4571",
  image:
    "https://d3hvwccx09j84u.cloudfront.net/web/image/533143aaff604d567f8b4571.jpg",
  name: "Crispy Fish Goujons ",
  time: "PT35M",
};

describe("ProductCard", () => {
  it("should render", () => {
    const { container } = render(<RecipeCard {...RecipeData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
