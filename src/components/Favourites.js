import React from "react";
import Link from "next/link";
import classes from "../../styles/Favourites.module.css";
import Doc from "./Doc";

const Favourites = ({ theDocs, toggleFav,showInfo }) => {
  const favs = theDocs.filter((doc) => doc.fav);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <p>Favourites</p>
      </div>
      <div className={classes.main}>
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
          <div className={classes.nothing}>Nothing to show here yet</div>
        )}
      </div>
    </div>
  );
};
export default Favourites;
