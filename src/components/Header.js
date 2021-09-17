import React from "react";
import Link from "next/link";
import classes from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.logo}>PDFBOX</div>
      <div className={classes.navOptions}>
        <div className={classes.themeToggler}>
          <span className={classes.toggleIcon}></span>
        </div>
        <div className={classes.userIcon}>
          <p>AM</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
