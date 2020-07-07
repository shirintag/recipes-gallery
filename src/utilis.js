import data from "../recipes.json";

export const rate = (userRating, globalRating, usersRated) => {
  let sum = globalRating * usersRated;
  sum += userRating;
  let average = sum / (usersRated + 1);
  return average;
};

export const filterData = (data, rating) => {
  return data.filter((el) => Math.round(el.rating) === rating);
};

export const SortData = (data) => {
  return data.sort((a, b) => b.favorites - a.favorites);
};
