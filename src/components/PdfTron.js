import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import classes from "../../styles/PdfTron.module.css";

const PdfTron = ({doc}) => {
  console.log(doc);
  const viewer = useRef(null);
  const uploadRef = useRef(null);
   useEffect(() => {
    WebViewer(
      {
        path: '../lib',
        initialDoc: `${doc.pdfFile}`,
      },
      viewer.current,
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;
      documentViewer.addEventListener('documentLoaded', () => {
        
        
      });
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
