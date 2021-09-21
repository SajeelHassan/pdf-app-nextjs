import React from "react";
import classes from "../../styles/DocInfo.module.css";

const DocInfo = ({info}) => {
  const {any,content}=info;
  return (
    <div className={classes.wrapper}>
      {any &&  (<><div className={classes.header}>
        <span style={{ backgroundColor: content.color }} className={classes.icon}>
          D3
        </span>
        <span className={classes.title}>{content.title}</span>
      </div>
      <div className={classes.tabs}>
        <p>Details</p>
        <span className={classes.marker} />
      </div>
      <div className={classes.infos}>
        <div className={classes.info}>
          <p className={classes.key}>Owner</p>
          <p className={classes.value}>{content.owner}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.key}>Created</p>
          <p className={classes.value}>4 May 2003, 10:46 PM</p>
        </div>
        <div className={classes.info}>
          <p className={classes.key}>Modified</p>
          <p className={classes.value}>12 May 2021, 17:32 PM</p>
        </div>
        <div className={classes.info}>
          <p className={classes.key}>Type</p>
          <p className={classes.value}>PDF</p>
        </div>
        <div className={classes.info}>
          <p className={classes.key}>Size</p>
          <p className={classes.value}>12mb</p>
        </div>
      </div></>)}
    </div>
  );
};
export default DocInfo;
