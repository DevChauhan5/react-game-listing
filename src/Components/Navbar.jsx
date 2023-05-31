import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiMoon,
  HiOutlineBars3CenterLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
  HiSun,
} from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import GenreList from "./GenreList";

function Navbar({ genreId, getGameListByGenresId }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center p-3">
      <img
        src={logo}
        alt="logo"
        height={60}
        width={60}
        className="hidden md:block"
      />

      <div className="md:hidden">
        {!toggle ? (
          <HiOutlineBars3CenterLeft
            onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer"
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer"
          />
        )}
        {toggle ? (
          <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212]">
            <GenreList />
          </div>
        ) : null}
      </div>

      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="px-2 bg-transparent outline-none"
          placeholder="Search Games..."
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
