import React from "react";
import dynamic from "next/dynamic";
import Header from "../../src/components/Header";
import axios from "axios";

export default function Home({doc}) {
  const PdfTron = dynamic(() => import("../../src/components/PdfTron.js"), {
    ssr: false,
  });
  
  // console.log(Hello);
  return (
    <>
      <Header name={doc.name}/>
      <PdfTron  doc={doc}/>
    </>
  );
}

export async function getStaticPaths() {
  const res = await axios('http://pdfbox.vercel.app/api/docs');
const data=res.data.data;
const paths=data.map(d=>({ params: { file: d._id } }));
  return {
    paths,
    fallback:false,
  };
}

export async function getStaticProps (context){
  const res = await axios(`http://pdfbox.vercel.app/api/docs/${context.params.file}`)
  return {
    props:{
        doc:res.data.data
    },
    revalidate:1
  }
}
