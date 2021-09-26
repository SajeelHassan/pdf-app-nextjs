import React from "react";
import dynamic from "next/dynamic";
import Header from "../../src/components/Header";
import axios from "axios";

export default function Home({doc}) {
  const PdfTron = dynamic(() => import("../../src/components/PdfTron.js"), {
    ssr: false,
  });
  return (
    <>
      <Header name={doc.name}/>
      <PdfTron  doc={doc}/>
    </>
  );
}

export async function getServerSideProps ({query}){
  const res = await axios(`${process.env.WEB_ADDRESS}/api/docs/${query.file}`);
  if (!res.data.data) {
    return {
      notFound: true,
    }
  }

  return {
    props:{
        doc:res.data.data
    },
  }
  
}
