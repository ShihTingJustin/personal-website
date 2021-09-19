import React, { useEffect } from "react";
import "../styles/globals.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
      AOS.init();
    }, []);
  return <Component {...pageProps} />
}

export default MyApp
