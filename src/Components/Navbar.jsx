import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("theme is", theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" height={60} width={60} />
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
