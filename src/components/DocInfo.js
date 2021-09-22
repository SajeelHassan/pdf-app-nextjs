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
        <span className={clsx(classes.title,isDarkMode && classes.titleDark)}>{content.name}</span>
      </div>
      <div className={clsx(classes.tabs,isDarkMode && classes.tabsDark)}>
        <p>Details</p>
        <span className={clsx(classes.marker,isDarkMode && classes.markerDark)} />
      </div>
      <div className={classes.infos}>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Owner</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>Andrew Miralles</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Created</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>{content.created}</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Modified</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}></p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Type</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>PDF</p>
        </div>
        <div className={classes.info}>
          <p className={clsx(classes.key,isDarkMode && classes.keyDark)}>Size</p>
          <p className={clsx(classes.value,isDarkMode && classes.valueDark)}>{(content.size/1000000).toFixed(2)}Mb</p>
        </div>
      </div></>)}
    </div>
  );
};
export default DocInfo;
