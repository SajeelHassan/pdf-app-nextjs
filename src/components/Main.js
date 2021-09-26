import React, { useState, useEffect,useContext } from "react";
import clsx from 'clsx';
import classes from "../../styles/Main.module.css";
import Search from "./Search";
import Upload from "./Upload";
import Favourites from "./Favourites";
import AllDocs from "./AllDocs";
import ThemeContext from "./Context";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const Main = ({showInfo,theDocs}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(false);
  const [docs, setDocs] = useState();
  const {isDarkMode,}=useContext(ThemeContext);
  const router=useRouter();
  useEffect(() => {
    setDocs(theDocs);
    setIsLoaded(true);
  }, []);

  const toggleFav = (id) => {
      let updatedDocs=[...docs];
      const docIndex = docs.findIndex(
        d => d._id === id
      );
      updatedDocs[docIndex].fav=!updatedDocs[docIndex].fav;
      setDocs(updatedDocs);  
  };
  async function uploadDbHandler (data){
const response = await axios.post('/api/uploadToDb',data);
      // console.log(response);
      if(response.status===200){
        setProgress(false);
        router.reload();
     }
  }
  async function uploadFileHandler(formData) {
    setProgress(true);
    // const config = {
    //   headers: { 'content-type': 'multipart/form-data' },
    //   onUploadProgress: (event) => {
    //     // console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    //   },
    // };
    // const response = await axios.post('/api/FileUpload', formData, config);
    // if(response.status===200){
    // setProgress(false);
    //   router.reload();
    // }
      const response = await axios.post('/api/formidUpload', formData);
      // console.log(response);
      if(response.status===200){
        // setProgress(false);
        // router.reload();
        uploadDbHandler(response.data.data);
        // console.log('foridUpload Response: \n',response.data.data);
     }
  }
  return (
    <div className={classes.MainWrapper}>
      {/* Docs Title */}
      <div className={clsx(classes.userAndTitle,isDarkMode&& classes.userAndTitleDark)}>
        <div className={clsx(classes.userIcon,isDarkMode&&classes.userIconDark)}>AM</div>
        <div className={clsx(classes.title,isDarkMode&&classes.titleDark)}>My Documents</div>
      </div>
      {/* Upload Section */}
      <Upload uploadFileHandler={uploadFileHandler} />
      {/* Main Docs */}

      {isLoaded && (
        <div className={clsx(classes.mainSectionWrapper,isDarkMode&&classes.mainSectionWrapperDark)}>
          <div className={clsx(classes.mainSection,isDarkMode&&classes.mainSectionDark)}>
            {/* Search */}
            <Search />
            {/* Favourites */}
            <Favourites theDocs={docs} toggleFav={toggleFav} showInfo={showInfo} />
            <AllDocs theDocs={docs} toggleFav={toggleFav} showInfo={showInfo}/>
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
