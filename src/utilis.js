import data from "../recipes.json";

export const rate = (userRating, globalRating, usersRated) => {
  let sum = globalRating * usersRated;
  sum += userRating;
  let average = sum / (usersRated + 1);
  return average;
};
