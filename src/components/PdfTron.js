import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import classes from "../../styles/PdfTron.module.css";

const PdfTron = () => {
  const viewer = useRef(null);
  const uploadRef = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: "../lib",
        initialDoc: "",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // uploadRef.current.onchange = (e) => {
      //   const file = e.target.files[0];
      //   if (file) {
      //     instance.UI.loadDocument(file);
      //   }
      // };
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">
        <input type="file" ref={uploadRef} hidden></input>
      </div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};
export default PdfTron;
