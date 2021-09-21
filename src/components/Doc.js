import React from "react";
import Link from "next/link";
import clsx from "clsx";
import classes from "../../styles/Doc.module.css";

const Doc = ({ title, owner,id, fav, color ,toggleFav,showInfo}) => {
  let acronym = title.match(/\b(\w)/g);
  acronym = acronym.slice(0, 2).join("");
  const toggleFavourite =()=>{
    toggleFav(id)
  };
  const showContent = ()=>{
showInfo({
  id,
  title,
  color,
  fav,
  owner
})
  }
  return (
    <div className={classes.doc} onClick={showContent}>
      <div className={classes.docInfo}>
        <div className={classes.marker} />
        <div className={classes.docIcon} style={{ backgroundColor: color }}>
          {acronym}
        </div>
        <div className={classes.docDetails}>
          <p className={classes.docTitle}>{title}</p>
          <p className={classes.docOwner}>Owner {owner}</p>
        </div>
      </div>
      <div className={classes.docOptions}>
        <span className={clsx(fav && classes.star, fav || classes.unStar)} onClick={toggleFavourite}/>
        <span className={classes.dots} />
      </div>
    </div>
  );
};
export default Doc;
