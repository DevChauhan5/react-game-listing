import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";

export default function Home() {
  const [allGamesList, setAllGamesList] = useState();
  useEffect(() => {
    getAllGamesList();
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 ? (
          <Banner gameBanner={allGamesList[0]} />
        ) : null}
      </div>
    </div>
  );
}
