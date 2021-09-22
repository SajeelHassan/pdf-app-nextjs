import React, { useContext } from "react";
import Link from "next/link";
import classes from "../../styles/AllDocs.module.css";
import Doc from "./Doc";
import ThemeContext from "./Context";
import clsx from 'clsx';

const AllDocs = ({ theDocs ,toggleFav,showInfo}) => {
  const {isDarkMode,}=useContext(ThemeContext);
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.title,isDarkMode&&classes.titleDark)}>
        <p>All Documents</p>
      </div>
      <div className={clsx(isDarkMode ?classes.mainDark : classes.main)}>
        {theDocs.map((docs, index) => (
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
        {theDocs.length === 0 && (
          <div className={clsx(classes.nothing,isDarkMode&&classes.nothingDark)}>Nothing to show here yet</div>
        )}
      </div>
    </div>
  );
};
export default AllDocs;
