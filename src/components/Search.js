import React from "react";
import classes from "../../styles/Search.module.css";

const Search = () => {
  return (
    <div className={classes.searchWrapper}>
      <div className={classes.searchInputDiv}>
        <input
          type="text"
          placeholder="Search"
          className={classes.searchInput}
        />
        <span className={classes.searchIcon} />
      </div>
      <span className={classes.sorter} />
    </div>
  );
};
export default Search;
