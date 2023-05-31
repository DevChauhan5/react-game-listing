import axios from "axios";

const key = "4a279625789640cfa4f1ccf9a750f18a";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
export default { getGenreList, getAllGames };
