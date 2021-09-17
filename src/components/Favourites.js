import React from "react";
import Link from "next/link";
import classes from "../../styles/Favourites.module.css";
import Doc from "./Doc";

const Favourites = ({ theDocs }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <p>Favourites</p>
      </div>
      <div className={classes.main}>
        {theDocs
          .filter((doc) => doc.fav)
          .map((docs, index) => (
            <Doc
              key={index}
              title={docs.title}
              owner={docs.owner}
              fav={docs.fav}
              color={docs.color}
            />
          ))}
      </div>
    </div>
  );
};
export default Favourites;
