import React from "react";
import classes from "../../styles/Upload.module.css";

const Upload = () => {
  return (
    <div className={classes.uploadSection}>
      <div className={classes.uploadWrapper}>
        <input type="file" id="upload" hidden />
        <label htmlFor="upload" className={classes.uploadButton}>
          <span className={classes.uploadIcon}></span>
          <p>Upload new</p>
        </label>
      </div>
      <span className={classes.dots}></span>
    </div>
  );
};
export default Upload;
