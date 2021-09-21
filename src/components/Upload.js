import React, { useRef } from "react";
import classes from "../../styles/Upload.module.css";

const Upload = ({ uploadFileHandler }) => {
  const uploadBtn = useRef();
  const uploadDoc = (e) => {
    const file = e.target.files[0];
    
    const data = {
      name: file.name,
      pdfFile:file
    };
    // console.log(data);
    uploadFileHandler(data);
  };
  return (
    <div className={classes.uploadSection}>
      <div className={classes.uploadWrapper}>
        <input type="file" id="upload" name='uploading' hidden onChange={uploadDoc} />
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
