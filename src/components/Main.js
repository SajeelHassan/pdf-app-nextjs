import React, { useState, useEffect } from "react";
import Link from "next/link";
import classes from "../../styles/Main.module.css";
import Search from "./Search";
import Upload from "./Upload";
import Favourites from "./Favourites";
import AllDocs from "./AllDocs";

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
const theDocs = [];
// const theDocs = [
//   {
//     id: "idd0987",
//     title: "My Doc",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "Document 1",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "Document 2",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "Important Document",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "My Doc",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "My Doc",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "My Doc",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
//   {
//     id: "idd0987",
//     title: "My Doc",
//     owner: "Andrew Miralles",
//     fav: false,
//     color: colors[Math.floor(Math.random() * colors.length)],
//   },
// ];

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [docs, setDocs] = useState();
  useEffect(() => {
    setDocs(theDocs);
    setIsLoaded(true);
  }, []);

  const toggleFav = () => {};
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
      <div className={classes.userAndTitle}>
        <div className={classes.userIcon}>AM</div>
        <div className={classes.title}>My Documents</div>
      </div>
      {/* Upload Section */}
      <Upload uploadFileHandler={uploadFileHandler} />
      {/* Main Docs */}

      {isLoaded && (
        <div className={classes.mainSectionWrapper}>
          <div className={classes.mainSection}>
            {/* Search */}
            <Search />
            {/* Favourites */}
            <Favourites theDocs={docs} toggleFav={toggleFav} />
            <AllDocs theDocs={docs} toggleFav={toggleFav} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
