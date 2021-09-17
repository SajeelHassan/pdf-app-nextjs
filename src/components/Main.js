import React from "react";
import Link from "next/link";
import classes from "../../styles/Main.module.css";
import Search from "./Search";
import Upload from "./Upload";
import Favourites from "./Favourites";
import AllDocs from "./AllDocs";

const Main = ({ theDocs }) => {
  return (
    <div className={classes.MainWrapper}>
      {/* Docs Title */}
      <div className={classes.userAndTitle}>
        <div className={classes.userIcon}>AM</div>
        <div className={classes.title}>My Documents</div>
      </div>
      {/* Upload Section */}
      <Upload />
      {/* Main Docs */}

      <div className={classes.mainSectionWrapper}>
        <div className={classes.mainSection}>
          {/* Search */}
          <Search />
          {/* Favourites */}
          <Favourites theDocs={theDocs} />
          <AllDocs theDocs={theDocs} />
        </div>
      </div>
    </div>
  );
};
export default Main;
