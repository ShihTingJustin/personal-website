import React, { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
      AOS.init({
        delay: 150,
      });
    }, []);
  return <Component {...pageProps} />
}

export default MyApp
