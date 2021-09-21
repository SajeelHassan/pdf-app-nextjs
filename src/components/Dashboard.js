import React from "react";
import Link from "next/link";
import classes from "../../styles/Dashboard.module.css";
import Header from "./Header";
import Main from "./Main";
import DocInfo from "./DocInfo";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={classes.docAndInfo}>
        <Main />
        <DocInfo />
      </div>
    </div>
  );
};
export default Dashboard;
