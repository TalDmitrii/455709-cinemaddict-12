import {createUserProfilTemplate} from "./view/user-profile";
import {createSiteNavigationTemplate} from "./view/site-navigation";
import {createSortingTemplate} from "./view/sorting";
import {createMainContainerTemplate} from "./view/main-container";
import {createFilmListTemplate} from "./view/film-list";
import {createFilmExtraListTemplate} from "./view/film-extra-list";
import {createFilmTemplate} from "./view/film";
import {createLoadMoreButtonTemplate} from "./view/load-more-button";
import {createFooterStatisticsTemplate} from "./view/footer-statistics";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

render(siteHeaderElement, createUserProfilTemplate(), `beforeend`);

render(siteMainElement, createSiteNavigationTemplate(), `beforeend`);
render(siteMainElement, createSortingTemplate(), `beforeend`);
render(siteMainElement, createMainContainerTemplate(), `beforeend`);

const mainContainer = siteMainElement.querySelector(`.films`);

render(mainContainer, createFilmListTemplate(), `beforeend`);

const filmList = mainContainer.querySelector(`.films-list`);
const filmListContainer = filmList.querySelector(`.films-list__container`);

for (let i = 0; i < 5; i++) {
  render(filmListContainer, createFilmTemplate(), `beforeend`);
}

render(filmList, createLoadMoreButtonTemplate(), `beforeend`);

render(mainContainer, createFilmExtraListTemplate(), `beforeend`);
render(mainContainer, createFilmExtraListTemplate(), `beforeend`);

// const extraLists = mainContainer.querySelectorAll(`.films-list--extra`);
// const extraListsArray = Array.prototype.slice.call(extraLists);

// extraListsArray.forEach(element => {
//   let container = element.querySelector(`.films-list__container`);
//   for (let i = 0; i < 2; i++) {
//     render(container, createFilmTemplate(), `beforeend`);
//   }
// });

render(siteFooterElement, createFooterStatisticsTemplate(), `beforeend`);
