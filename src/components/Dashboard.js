import React from "react";
import Link from "next/link";
import classes from "../../styles/Dashboard.module.css";
import Header from "./Header";
import {useState} from 'react';
import Main from "./Main";
import DocInfo from "./DocInfo";

const Dashboard = () => {
  const [info, setInfo] = useState({any:false,content:{}});
  const showInfo =(data)=>{
    setInfo({any:true,content:data})
  }
  return (
    <div>
      <Header />
      <div className={classes.docAndInfo}>
        <Main showInfo={showInfo}/>
        <DocInfo info={info}/>
      </div>
    </div>
  );
};
export default Dashboard;
