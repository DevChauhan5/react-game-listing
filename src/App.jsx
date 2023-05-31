import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#121212]" : null
        } min-h-[100vh]`}
      >
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
