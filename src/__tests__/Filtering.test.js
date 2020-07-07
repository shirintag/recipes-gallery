import data from "../../recipes.json";
import { filterData } from "../utilis";

describe("Finltering", () => {
  it("Should filter the recipes with rating 5", () => {
    let filtered = filterData(data, 5);
    expect(filtered.length).toBe(2);
  });

  it("Should filter the recipes with rating 5", () => {
    let filtered = filterData(data, 4);
    expect(filtered.length).toBe(4);
  });
});
