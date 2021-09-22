import React,{useContext} from "react";
import Link from "next/link";
import ThemeContext from "./Context";
import clsx from 'clsx';
import classes from "../../styles/Header.module.css";

const Header = () => {
  const {isDarkMode,toggleTheme}=useContext(ThemeContext);
  const toggleThemeHandler = () => {
    toggleTheme();
  };
  return (
    <div className={clsx(classes.headerWrapper,isDarkMode?classes.headerWrapperDark:classes.headerWrapperLight)}>
      <div className={clsx(classes.logo,isDarkMode?classes.logoDark:classes.logoLight)}>PDFBOX</div>
      <div className={classes.navOptions}>
        <div className={clsx(classes.themeToggler,isDarkMode?classes.themeTogglerDark:classes.themeTogglerLight)} onClick={toggleThemeHandler}>
          <span className={clsx(classes.toggleIcon,isDarkMode?classes.toggleIconDark:classes.toggleIconLight)}></span>
        </div>
        <div className={clsx(classes.userIcon,isDarkMode?classes.userIconDark:classes.userIconLight)}>
          <p>AM</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
