import React from "react";
import { render } from "@testing-library/react";

import RecipeCard from "../components/RecipeCard/RecipeCard";
const RecipeData = {
  name: "Crispy Fish Goujons ",
  headline: "with Sweet Potato Wedges and Minted Snap Peas",
  calories: "516 kcal",
  id: "533143aaff604d567f8b4571",
  time: "PT35M",
  rating: 4.5,
  usersRated: 3,
  image:
    "https://d3hvwccx09j84u.cloudfront.net/web/image/533143aaff604d567f8b4571.jpg",
};

describe("ProductCard", () => {
  it("should render", () => {
    const { container } = render(<RecipeCard {...RecipeData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
