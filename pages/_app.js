import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import '../styles/globals.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import theme from '../src/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '../src/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const cssVar = {
  // textGlow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
  // web3Gradient: 'linear-gradient(to right, #30cfd0, #c43ad6)',
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 350,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <title>JustinHuang - A Curious Soul 👨🏻‍💻</title>
      </Head>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component {...pageProps} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// use dynamic to avoid Hydration failed
// https://github.com/vercel/next.js/discussions/35773
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
