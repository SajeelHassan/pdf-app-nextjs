import clsx from "clsx";
import React, { useRef ,useContext} from "react";
import classes from "../../styles/Upload.module.css";
import ThemeContext from "./Context";

const Upload = ({ uploadFileHandler }) => {
  const {isDarkMode,}=useContext(ThemeContext);
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
    <div className={clsx(classes.uploadSection,isDarkMode && classes.uploadSectionDark)}>
      <div className={classes.uploadWrapper}>
        <input type="file" id="upload" name='uploading' hidden onChange={uploadDoc} />
        <label htmlFor="upload" className={clsx(classes.uploadButton,isDarkMode && classes.uploadButtonDark)}>
          <span className={clsx(classes.uploadIcon,isDarkMode && classes.uploadIconDark)}></span>
          <p>Upload new</p>
        </label>
      </div>
      <span className={clsx(classes.dots,isDarkMode && classes.dotsDark)}></span>
    </div>
  );
};
export default Upload;
