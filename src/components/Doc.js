import React, { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import clsx from "clsx";
import classes from "../../styles/Doc.module.css";
import ThemeContext from "./Context";

const Doc = ({ title, owner,id, fav, color ,toggleFav,showInfo}) => {
  const {isDarkMode,}=useContext(ThemeContext);
  const router = useRouter();
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
  const showPdf=()=>{
    router.push('./view/v1');
  }
  return (
    <div className={clsx(classes.doc,isDarkMode && classes.docDark)} onClick={showContent}>
      <div className={classes.docInfo}>
        <div className={classes.marker} />
        <div className={clsx(classes.docIcon,isDarkMode && classes.docIconDark)} style={{ backgroundColor: color }}>
          {acronym}
        </div>
        <div className={classes.docDetails}>
          <p className={clsx(classes.docTitle,isDarkMode && classes.docTitleDark)} onClick={showPdf}>{title}</p>
          <p className={clsx(classes.docOwner,isDarkMode && classes.docOwnerDark)}>Owner {owner}</p>
        </div>
      </div>
      <div className={clsx(classes.docOptions,isDarkMode && classes.docOptionsDark)}>
        <span className={clsx(fav && classes.star, fav || classes.unStar)} onClick={toggleFavourite}/>
        <span className={classes.dots} />
      </div>
    </div>
  );
};
export default Doc;
