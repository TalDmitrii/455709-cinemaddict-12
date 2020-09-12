import {createUserProfilTemplate} from "./view/user-profile";
import {createFilterTemplate} from "./view/filter";
import {createSortingTemplate} from "./view/sorting";
import {createMainContainerTemplate} from "./view/main-container";
import {createFilmListTemplate} from "./view/film-list";
// import {createFilmExtraListTemplate} from "./view/film-extra-list";
import {createFilmTemplate} from "./view/film";
import {createLoadMoreButtonTemplate} from "./view/load-more-button";
import {createFooterStatisticsTemplate} from "./view/footer-statistics";
import {createFilmDetailTemplate} from "./view/film-detail";
import {generateFilm} from "./mock/film";
import {generateUser} from "./mock/user";
import {generateFilter} from "./mock/filter";

const FILM_COUNT = 22;
const FILM_COUNT_PER_STEPS = 5;

const films = new Array(FILM_COUNT).fill().map(generateFilm);
const user = generateUser();
const filter = generateFilter(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

render(siteHeaderElement, createUserProfilTemplate(user), `beforeend`);

render(siteMainElement, createFilterTemplate(filter), `beforeend`);
render(siteMainElement, createSortingTemplate(), `beforeend`);
render(siteMainElement, createMainContainerTemplate(), `beforeend`);

const mainContainer = siteMainElement.querySelector(`.films`);

render(mainContainer, createFilmListTemplate(), `beforeend`);

const filmList = mainContainer.querySelector(`.films-list`);
const filmListContainer = filmList.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEPS); i++) {
  render(filmListContainer, createFilmTemplate(films[i]), `beforeend`);
}

if (films.length > FILM_COUNT_PER_STEPS) {
  let filmsRendered = FILM_COUNT_PER_STEPS;

  render(filmList, createLoadMoreButtonTemplate(), `beforeend`);

  const loadMoreButton = mainContainer.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films
      .slice(filmsRendered, filmsRendered + FILM_COUNT_PER_STEPS)
      .forEach((film) => render(filmListContainer, createFilmTemplate(film), `beforeend`));

    filmsRendered += FILM_COUNT_PER_STEPS;

    if (filmsRendered >= films.length) {
      loadMoreButton.remove();
    }
  });
}

render(mainContainer, createFilmDetailTemplate(films[0]), `beforeend`);

// render(mainContainer, createFilmExtraListTemplate(), `beforeend`);
// render(mainContainer, createFilmExtraListTemplate(), `beforeend`);

// const extraLists = mainContainer.querySelectorAll(`.films-list--extra`);
// const extraListsArray = Array.prototype.slice.call(extraLists);

// extraListsArray.forEach(element => {
//   let container = element.querySelector(`.films-list__container`);
//   for (let i = 0; i < 2; i++) {
//     render(container, createFilmTemplate(), `beforeend`);
//   }
// });

render(siteFooterElement, createFooterStatisticsTemplate(), `beforeend`);
