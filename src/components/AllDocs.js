import React from "react";
import Link from "next/link";
import classes from "../../styles/AllDocs.module.css";
import Doc from "./Doc";

const AllDocs = ({ theDocs }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <p>All Documents</p>
      </div>
      <div className={classes.main}>
        {theDocs.map((docs, index) => (
          <Doc
            key={index}
            title={docs.title}
            owner={docs.owner}
            fav={docs.fav}
            color={docs.color}
          />
        ))}
        {theDocs.length === 0 && (
          <div className={classes.nothing}>Nothing to show here yet</div>
        )}
      </div>
    </div>
  );
};
export default AllDocs;
