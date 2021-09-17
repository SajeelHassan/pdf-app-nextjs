import React from "react";
import Link from "next/link";
import classes from "../../styles/Dashboard.module.css";
import Header from "./Header";
import Main from "./Main";
import DocInfo from "./DocInfo";

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
const Dashboard = () => {
  const theDocs = [
    {
      title: "My Doc",
      owner: "Andrew Miralles",
      fav: true,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "Document 1",
      owner: "Andrew Miralles",
      fav: false,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "Document 2",
      owner: "Andrew Miralles",
      fav: true,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "Important Document",
      owner: "Andrew Miralles",
      fav: false,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "My Doc",
      owner: "Andrew Miralles",
      fav: false,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "My Doc",
      owner: "Andrew Miralles",
      fav: true,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "My Doc",
      owner: "Andrew Miralles",
      fav: true,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      title: "My Doc",
      owner: "Andrew Miralles",
      fav: false,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];
  return (
    <div>
      <Header />
      <div className={classes.docAndInfo}>
        <Main theDocs={theDocs} />
        <DocInfo />
      </div>
    </div>
  );
};
export default Dashboard;
