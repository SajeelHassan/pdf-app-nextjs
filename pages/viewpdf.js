import React from "react";
import dynamic from "next/dynamic";
import Header from "../src/components/Header";

export default function Home() {
  const PdfTron = dynamic(() => import("../src/components/PdfTron.js"), {
    ssr: false,
  });

  return (
    <>
      <Header />
      <PdfTron />
    </>
  );
}
