import { rate } from "../utilis";

describe("Rating", () => {
  it("should update the average of the rating", () => {
    let userRating = 2;
    let globalRating = 5;
    let usersRated = 2;
    let newRating = rate(userRating, globalRating, usersRated);
    expect(newRating).toBe(4);
  });

  it("should update the average of the rating", () => {
    let userRating = 3;
    let globalRating = 5;
    let usersRated = 3;
    let newRating = rate(userRating, globalRating, usersRated);
    expect(newRating).toBe(4.5);
  });
});
