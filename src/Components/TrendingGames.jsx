import React from "react";

function TrendingGames({ gameList }) {
  return (
    <div className="hidden md:block mt-5">
      <h2 className="font-bold text-[30px] dark:text-white">Trendig Games</h2>
      <div className="md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div key={index} className="bg-[#76a8f75e] rounded-lg group cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                <img
                  className="h-[270px] rounded-t-lg object-cover"
                  src={item.background_image}
                  alt="Trending_image"
                />
                <h2 className="dark:text-white text-[20px] p-2 font-bold">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
