const createFilterItemTemplate = (filter) => {
  const {name, count} = filter;
  let id;

  switch (true) {
    case (name === `isAddedToWatchlist`):
      id = `watchlist`;
      break;
    case (name === `isHistory`):
      id = `history`;
      break;
    case (name === `isFavorite`):
      id = `favorites`;
      break;
  }

  return (
    `<a href="#${id}" class="main-navigation__item">${id[0].toLocaleUpperCase() + id.slice(1)} <span class="main-navigation__item-count">${count}</span></a>`
  );
};

export const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
  .map((item) => createFilterItemTemplate(item))
  .join(``);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${filterItemsTemplate}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
