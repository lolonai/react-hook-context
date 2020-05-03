import React, { useContext } from "react";
import "./Btntoggle.css";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Btntoggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={theme ? "btn-toggle goLight" : "btn-toggle goDark"}
    >
      {theme ? "Dark" : "Light"}
    </div>
  );
}
