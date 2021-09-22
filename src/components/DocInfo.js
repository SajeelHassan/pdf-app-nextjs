import clsx from "clsx";
import React, { useContext } from "react";
import classes from "../../styles/DocInfo.module.css";
import ThemeContext from "./Context";

const DocInfo = ({info}) => {
  const {isDarkMode,}=useContext(ThemeContext);
  const {any,content}=info;
  return (
    <div className={classes.wrapper}>
      {any &&  (<><div className={classes.header}>
        <span style={{ backgroundColor: content.color }} className={clsx(classes.icon,isDarkMode && classes.iconDark)}>
          D3
        </span>
        <span className={clsx(classes.title,isDarkMode && classes.titleDark)}>{content.title}</span>
      </div>
      <div className={clsx(classes.tabs,isDarkMode && classes.tabsDark)}>
        <p>Details</p>
        <span className={clsx(classes.marker,isDarkMode && classes.markerDark)} />
      </div>
      <div className={classes.infos}>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Owner</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>{content.owner}</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Created</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>4 May 2003, 10:46 PM</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Modified</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>12 May 2021, 17:32 PM</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Type</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>PDF</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Size</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>12mb</p>
        </div>
      </div></>)}
    </div>
  );
};
export default DocInfo;
