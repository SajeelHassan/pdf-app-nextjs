import React from "react";
import Head from "next/head";
import Image from "next/image";
import Dashboard from "../src/components/Dashboard";
import axios from "axios";

export default function Home(props) {
  return <Dashboard theDocs={props.theDocs}/>;
}


// export async function getStaticProps(){
//   const res=await axios(`${process.env.WEB_ADDRESS}/api/docs`);
//   return {
//     props:{
//       theDocs:res.data.data
//     },
//     revalidate:1
//   }
//}

export async function getServerSideProps (){

  const res = await axios(`${process.env.WEB_ADDRESS}/api/docs`)
  
  if (!res.data.data) {
    return {
      notFound: true,
    }
  }

  return{
    props:{
      theDocs:res.data.data
    }
  }
}