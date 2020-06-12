import React from "react";
import { render } from "@testing-library/react";
import RecipeData from "../../recipes.json";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";

describe("RecipeGallery", () => {
  it("should render", () => {
    const { container } = render(<RecipeGallery recipes={RecipeData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
