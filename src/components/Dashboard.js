import React, { useContext } from "react";
import Link from "next/link";
import classes from "../../styles/Dashboard.module.css";
import Header from "./Header";
import {useState} from 'react';
import Main from "./Main";
import DocInfo from "./DocInfo";
import ThemeContext from "./Context";
import clsx from "clsx";

const Dashboard = () => {
  const {isDarkMode,}=useContext(ThemeContext);
  const [info, setInfo] = useState({any:false,content:{}});
  const showInfo =(data)=>{
    setInfo({any:true,content:data})
  }
  return (
    <div>
      <Header />
      <div className={clsx(classes.docAndInfo,isDarkMode&&classes.docAndInfoDark)}>
        <Main showInfo={showInfo}/>
        <DocInfo info={info}/>
      </div>
    </div>
  );
};
export default Dashboard;
