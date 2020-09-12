export const createFilmTemplate = (film) => {
  const {title, poster, description, rating, year, time, genre, comments} = film;

  const hoursTime = Math.floor(time / 60);
  const minuteTime = time % 60;

  const filmComments = comments ? comments.length : ``;

  const genreList = [...genre].join(` `);

  // const isWatchlistClass = isAddedToWatchlist
  //   ? `film-card__controls-item--add-to-watchlist`
  //   : ``;

  // const isWatchedClass = isWatched
  //   ? `film-card__controls-item--mark-as-watched`
  //   : ``;

  // const isFavoriteClass = isFavorite
  //   ? `film-card__controls-item--favorite`
  //   : ``;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${hoursTime} h ${minuteTime} min</span>
        <span class="film-card__genre">${genreList}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${filmComments} ${filmComments ? `comments` : ``}</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};
