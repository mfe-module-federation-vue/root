import { STORAGE_KEYS } from "../dealful";

export const userData = () => {
  const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);

  try {
    return JSON.parse(userData);
  } catch (error) {
    throw Error("user data is empty");
  }
};
