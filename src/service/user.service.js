import { data } from "./fakeUser";

export const getUser = async () => {
  try {
    // fetch("https://api.github.com/users/tassioFront", { // it's just to avoid a lotta request
    //       method: "GET",
    //   }).then((res) => res.json())
    return await data;
  } catch (error) {
    return error;
  }
};
