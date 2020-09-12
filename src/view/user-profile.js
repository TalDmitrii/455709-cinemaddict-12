export const createUserProfilTemplate = (user) => {
  const {experience} = user;

  const setRating = (score) => {
    let rating = ``;

    switch (true) {
      case score >= 1 && score <= 10:
        rating = `novice`;
        break;
      case score > 10 && score <= 20:
        rating = `fan`;
        break;
      case score > 20:
        rating = `movie buff`;
        break;
    }

    return rating;
  };

  const rating = setRating(experience);

  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${rating ? rating : ``}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};
