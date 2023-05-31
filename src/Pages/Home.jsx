import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

export default function Home() {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };
  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList genreId={(genreId) => getGameListByGenresId(genreId)} />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenreId gameList={gameListByGenres} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
