import React from "react";
import Head from "next/head";
import Image from "next/image";
import Dashboard from "../src/components/Dashboard";
import axios from "axios";

export default function Home(props) {
  return <Dashboard theDocs={props.theDocs}/>;
}


export async function getStaticProps(){
  const res=await axios('http://localhost:3000/api/docs');
  return {
    props:{
      theDocs:res.data.data
    },
    revalidate:1
  }
}