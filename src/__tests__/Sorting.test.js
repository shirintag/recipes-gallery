import data from "../../recipes.json";
import { SortData } from "../utilis";

describe("Sorting", () => {
  it("Should sort the json by favorites", () => {
    let sorted = SortData(data);
    expect(sorted[0].favorites).toBe(44);
    expect(sorted[sorted.length - 1].favorites).toBe(1);
  });
});
