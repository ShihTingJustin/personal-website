import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <link rel="preconnect" as="" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" as="" href="//www.googletagmanager.com" />
        <link rel="preconnect" as="" href="//i.imgur.com" />
        <link rel="dns-prefetch" as="" href="//i.imgur.com" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="JustinHuang" />
        <meta name="copyright" content="JustinHuang" />
        <meta itemProp="name" content="JustinHuang" />
        <meta itemProp="image" content="https://i.imgur.com/65OtneAm.jpg" />
        <meta
          itemProp="description"
          content="Hi, I'm Justin! Welcome to my personal website, you can find more information about me and link to other social media like Linkedin, GitHub, Medium and Instagram."
        />
        <meta property="og:title" content="JustinHuang - A Curious Soul" key="ogtitle" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://jhdev.pro" key="ogurl" />
        <meta
          property="og:description"
          content="Hi, I'm Justin! Welcome to my personal website, you can find more information about me and link to other social media like LinkedIn, GitHub, Medium and Instagram."
          key="ogdes"
        />
        <meta property="og:image" content="https://i.imgur.com/65OtneAm.jpg" key="ogimage" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          async
          id="ga-script-1"
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="ga-script-2" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
