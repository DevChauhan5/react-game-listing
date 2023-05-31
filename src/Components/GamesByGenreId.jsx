import React from "react";

function GamesByGenreId({ gameList }) {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        Popular Games
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
    lg:grid-cols-3 gap-6 mt-7'"
      >
        {gameList.map((item, index) => (
          <div key={index} className="pb-14 bg-[#76a8f75e]  p-4 rounded-lg h-full 
          hover:scale-110 transition-all duration-300 cursor-pointer"> 
            <img
              className="w-full h-[80%] rounded-xl object-cover"
              src={item.background_image}
              alt="gameListImage"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-black dark:text-gray-300">
              ⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
