import {getRandomInteger} from "../utils";
import {getRandomArbitrary} from "../utils";

const generateTitle = () => {
  const titles = [
    `Последний киногерой`,
    `Хищник`,
    `Интерстеллар`,
    `Властелин колец`,
    `Harry Potter`
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generatePoster = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};

const generateDescription = () => {
  const SENTENCES = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

  const arraySentence = SENTENCES.split(`. `);
  const description = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = getRandomInteger(0, arraySentence.length - 1);

    description.push(arraySentence[randomIndex]);
  }

  return description.join(`. `);
};

const generateGenres = () => {
  const genres = new Set();

  const genresList = [
    `science-fiction film`,
    `triller`,
    `comedy`,
    `dramatic`,
  ];

  for (let i = 0; i < 5; i++) {
    genres.add(genresList[getRandomInteger(0, genresList.length)]);
  }

  return genres;
};

const generateComments = () => {
  const comments = [];

  const authors = [
    `Pushkin`,
    `Lermontov`,
    `Solgenitcin`,
    `Petrov`,
    `Boshirov`,
  ];

  const commentsCount = getRandomInteger(0, 5);

  for (let i = 0; i < commentsCount; i++) {
    const randomIndex = getRandomInteger(0, authors.length - 1);
    const author = authors[randomIndex];

    const comment = {
      author,
      date: new Date(),
      message: generateDescription(),
      score: getRandomInteger(1, 10),
    };

    comments.push(comment);
  }

  return comments;
};

export const generateFilm = () => {
  return {
    title: generateTitle(),
    poster: generatePoster(),
    description: generateDescription(),
    rating: getRandomArbitrary(1, 10),
    year: getRandomInteger(1900, 2020),
    time: getRandomInteger(90, 150),
    genre: generateGenres(),
    comments: generateComments(),
    isAddedToWatchlist: Boolean(getRandomInteger(0, 1)),
    isHistory: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isLimitForAge: Boolean(getRandomInteger(0, 1)),
  };
};
