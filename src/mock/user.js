import {getRandomInteger} from "../utils";

export const generateUser = () => {
  return {
    experience: getRandomInteger(0, 100)
  };
};
