import React, { useState, useEffect,useContext } from "react";
import clsx from 'clsx';
import classes from "../../styles/Main.module.css";
import Search from "./Search";
import Upload from "./Upload";
import Favourites from "./Favourites";
import AllDocs from "./AllDocs";
import ThemeContext from "./Context";

const colors = [
  "#8089FF",
  "#4C7FFF",
  "#F77474",
  "#FF6E9C",
  "#ED9C37",
  "#FFC144",
  "#00893E",
  "#5558AF",
];
// const theDocs = [];
const theDocs = [
  {
    id: "idd0987",
    title: "My Doc",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0988",
    title: "Document 1",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0989",
    title: "Document 2",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0990",
    title: "Important Document",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0991",
    title: "My Doc",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0992",
    title: "My Doc",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0993",
    title: "My Doc",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    id: "idd0994",
    title: "My Doc",
    owner: "Andrew Miralles",
    fav: false,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
];

const Main = ({showInfo}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [docs, setDocs] = useState();
  const {isDarkMode,}=useContext(ThemeContext);
  useEffect(() => {
    setDocs(theDocs);
    setIsLoaded(true);
  }, []);

  const toggleFav = (id) => {
      let updatedDocs=[...docs];
      const docIndex = docs.findIndex(
        d => d.id === id
      );
      updatedDocs[docIndex].fav=!updatedDocs[docIndex].fav;
      setDocs(updatedDocs);  
  };
  async function uploadFileHandler(fileData) {
    // const res = await fetch('http://localhost:3000/api/docs', {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(fileData)
    //         })

    // const data = await response.json();

    console.log(fileData);

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
