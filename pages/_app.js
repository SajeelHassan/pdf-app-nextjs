import React,{useState,useEffect} from 'react'
import '../styles/globals.css';
import ThemeContext from '../src/components/Context';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }) {
  const [isDarkMode,setIsDarkMode]=useState();
  const [isCookie,setIsCookie]=useState();
  
  const toggleThemeHandler=()=>{
    setIsDarkMode(prevVal=>!prevVal);
    if (Cookies.get('themeCookiePdfBox')){
    Cookies.remove('themeCookiePdfBox')
  }else{
    Cookies.set('themeCookiePdfBox', 'dark', { expires: 365 })
  }}
  useEffect(()=>{
        if (Cookies.get('themeCookiePdfBox')){
          setIsDarkMode(true);
        }
  },[])
  return (
    <ThemeContext.Provider value = {{isDarkMode:isDarkMode,toggleTheme:toggleThemeHandler}}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}

export default MyApp
