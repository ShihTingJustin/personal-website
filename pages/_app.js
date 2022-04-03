import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
      </Script>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="Justin Huang, Shih-Ting Huang, 黃士庭, frontend developer, frontend engineer"
        />
        <title>JustinHuang - A Restless Soul 👨🏻‍💻</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="JustinHuang" />
        <meta name="copyright" content="JustinHuang" />
        <meta itemProp="name" content="JustinHuang" />
        <meta
          itemProp="image"
          content="/_next/static/media/me.7c0b9d82481ed302a5957ba8b9299c4d.webp"
        />
        <meta
          itemProp="description"
          content="Hi, I'm Justin! Welcome to my personal website, you can find more information about me and link to other social media like Linkedin, GitHub, Medium and Instagram."
        />
        <meta property="og:title" content="JustinHuang - A Restless Soul" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jhdev.pro" />
        <meta
          property="og:image"
          content="/_next/static/media/me.7c0b9d82481ed302a5957ba8b9299c4d.webp"
        />
        <meta
          property="og:description"
          content="Hi, I'm Justin! Welcome to my personal website, you can find more information about me and link to other social media like LinkedIn, GitHub, Medium and Instagram."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
