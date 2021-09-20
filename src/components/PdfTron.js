import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import classes from "../../styles/PdfTron.module.css";

const PdfTron = () => {
  const viewer = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc: "files/demo-annotated.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};
export default PdfTron;
