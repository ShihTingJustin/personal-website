import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import theme from '../src/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '../src/i18n';

const cssVar = {
  textGlow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
  web3Gradient: 'linear-gradient(to right, #30cfd0, #c43ad6)',
  web3Background:
    'radial-gradient(circle closest-corner at -5% 25%, rgba(40, 72, 122, 0.85), transparent), radial-gradient(circle closest-corner at 120% 60%, rgba(138, 41, 129, 0.7),transparent)',
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 175,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
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
        <meta itemProp="image" content="/_next/static/media/me.cdafe7b6.jpeg" />
        <meta
          itemProp="description"
          content="Hi, I'm Justin! Welcome to my personal website, you can find more information about me and link to other social media like Linkedin, GitHub, Medium and Instagram."
        />
        <meta property="og:title" content="JustinHuang - A Restless Soul" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jhdev.pro" />
        <meta property="og:image" content="/_next/static/media/me.cdafe7b6.jpeg" />
        <meta
          property="og:description"
          content="Hi, I'm Justin! Welcome to my personal website, you can find more information about me and link to other social media like LinkedIn, GitHub, Medium and Instagram."
        ></meta>
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
      </Head>
      <ThemeProvider theme={{ ...theme, ...cssVar }}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// use dynamic to avoid Hydration failed
// https://github.com/vercel/next.js/discussions/35773
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
