const filmToFilterMap = {
  isAddedToWatchlist: (films) => films.filter((film) => film.isAddedToWatchlist).length,
  isHistory: (films) => films.filter((film) => film.isHistory).length,
  isFavorite: (films) => films.filter((film) => film.isFavorite).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countfilms]) => {
    return {
      name: filterName,
      count: countfilms(films),
    };
  });
};
