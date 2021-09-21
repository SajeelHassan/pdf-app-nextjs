import React from "react";
import dynamic from "next/dynamic";
import Header from "../../src/components/Header";

export default function Home({Hello}) {
  const PdfTron = dynamic(() => import("../../src/components/PdfTron.js"), {
    ssr: false,
  });
  
  // console.log(Hello);
  return (
    <>
      <Header />
      <PdfTron  />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          file: 'v1',
        },
      },
      {
        params: {
          file: 'v2',
        },
      },
    ],
  };
}

export async function getStaticProps (context){
  // console.log(context);
  return {
    props:{
        Hello:'Hello'
    }
  }
}
