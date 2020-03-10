import swapi from "swapi-node";

export const getMovies = async () => {
  try {
    let data = await swapi.get("https://swapi.co/api/films");

    let res = data.results.sort(
      (a, b) => b.release_date.split("-")[0] - a.release_date.split("-")[0]
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
