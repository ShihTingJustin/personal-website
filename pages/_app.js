import React, { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 125,
    });
  }, []);
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GQ88K29S7Z"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-GQ88K29S7Z');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
