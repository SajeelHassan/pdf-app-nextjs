import React, { useContext } from "react";
import Link from "next/link";
import classes from "../../styles/Favourites.module.css";
import Doc from "./Doc";
import clsx from "clsx";
import ThemeContext from "./Context";

const Favourites = ({ theDocs, toggleFav,showInfo }) => {
  const {isDarkMode,}=useContext(ThemeContext);
  const favs = theDocs.filter((doc) => doc.fav);
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.title,isDarkMode&&classes.titleDark)}>
        <p>Favourites</p>
      </div>
      <div className={clsx(isDarkMode ?classes.mainDark : classes.main)}>
        {favs.map((docs, index) => (
          <Doc
            key={index}
            id={docs.id}
            title={docs.title}
            owner={docs.owner}
            fav={docs.fav}
            color={docs.color}
            toggleFav={toggleFav}
            showInfo={showInfo}
          />
        ))}
        {favs.length === 0 && (
          <div className={clsx(classes.nothing,isDarkMode&&classes.nothingDark)}>Nothing to show here yet</div>
        )}
      </div>
    </div>
  );
};
export default Favourites;
