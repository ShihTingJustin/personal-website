import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import { Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Timeline from '@/Components/timeline/Timeline';
import Switch from '@/Components/switch/Switch';
import ImageList from '@/Components/imageList/ImageList';
import { Intro } from '@/Pages/home/intro';
import { FurtherInfo } from '@/Pages/home/furtherInfo';

import { getCustomImageLoader } from '@/Utils/index';

// const mockContentData = [
//   {
//     bg: 'react',
//     content: (
//       <div>
//         資訊科技大幅改變人類的生活型態，我們每天都需要用到各種軟體服務，我認為有技術能力親手打造產品是一件很酷的事情。
//         <br />
//         <br />
//         前端工程師站在人文與科技的交叉口，結合理性與感性，為產品打造使用者介面並創造好的使用者體驗，是我喜歡的工作模式。
//         <br />
//         <br />
//         目前專注於前端領域，擅長運用 React 生態系工具打造網頁應用程式。
//         <br />
//         對於技術抱持開放的態度，會利用 side project 接觸後端及 DevOps 相關技術。
//       </div>
//     ),
//   },
//   {
//     bg: 'auto',
//     content: (
//       <div>
//         汽車是人類智慧的結晶，力與美的結合，也是個人特色的展現。
//         假日爬得起來的話會在清晨去106縣道兜風，幸運的話可以獲得美美的追焦照。
//         <br />
//         <br />
//         生在資訊爆炸的時代讓玩車更容易，卻也感嘆內燃機的時代已經進入倒數計時。
//       </div>
//     ),
//   },
//   {
//     bg: 'invest',
//     content: (
//       <div>
//         指數化投資的實踐者，經歷美股兩週四次熔斷和後續V型反轉的洗禮後，領悟了一套適合自己的投資哲學。
//         <br />
//         <br />
//         常看綠角財經筆記和 IEObserve國際經濟觀察。
//         另外也對於加密貨幣的崛起及其與法幣之間的關係會如何變化很感興趣。
//       </div>
//     ),
//   },
//   {
//     bg: 'ta',
//     content: (
//       <div>
//         在程式教育機構擔任助教，除了批改作業，也時常從學生提出的問題中學習，或是看到自己也可以更進步的地方，教學相長。
//       </div>
//     ),
//   },
//   {
//     bg: 'share',
//     content: (
//       <div>
//         平常都在網路上看別人寫的文章，獲益匪淺，所以決定自己也在 Medium
//         撰寫文章作為回饋，主題包含程式、轉職、面試、技術筆記。
//       </div>
//     ),
//   },
//   {
//     bg: 'movie',
//     content: (
//       <div>
//         愛看科幻電影滿足想像力，像是駭客任務、星際大戰、黑暗騎士、全面啟動、普羅米修斯、天能等等。
//         <br />
//         <br />
//         也喜歡昆丁塔倫提諾獨特的暴力美學和敘事手法，像是惡棍特工、決殺令、八惡人、從前有個好萊塢。
//       </div>
//     ),
//   },
//   {
//     bg: 'info',
//     content: (
//       <div className="further-icon">
//         <a target="_tab" rel="noopener noreferrer" href="https://linkedin.com/in/justinhuang777">
//           <LinkedInIcon width="45" height="45" />
//         </a>
//         <a target="_tab" rel="noopener noreferrer" href="https://github.com/ShihTingJustin">
//           <GitHubIcon width="70" height="70" />
//         </a>
//         <a target="_tab" rel="noopener noreferrer" href="https://medium.com/life-after-hello-world">
//           <MediumIcon width="45" height="45" viewBox="0 0 195 195" />
//         </a>
//         <a target="_tab" rel="noopener noreferrer" href="https://www.instagram.com/mb722656355s/">
//           <IGIcon width="70" height="70" />
//         </a>
//       </div>
//     ),
//   },
// ];

export default function Home({
  imgixDomain,
  imgixSecureURLToken,
}: {
  imgixDomain: string;
  imgixSecureURLToken: string;
}) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = window.navigator.language.split('-')[0] || 'zh';
    Cookies.set('lang', language);
    i18n.changeLanguage(Cookies.get('lang'));
  }, [i18n]);

  // set html lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.languages[0];
  }, [i18n.languages]);

  return (
    <div id="container">
      <div id="cover" className="block">
        <div id="cover-text">
          <Typewriter
            options={{
              strings: [
                'Developer',
                'Product Manager',
                'Petrol-head',
                'Investor',
                'Teaching Assistant',
                'Learner',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
            }}
          />
        </div>
      </div>
      <div id="intro-wrapper" className="block">
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            width: '100%',
            fontSize: { xs: '4em', sm: '5em', md: '10em' },
            pb: '0.5em',
          }}
        >
          {t('1_intro_title')}
        </Typography>
        <Intro
          imageLoader={getCustomImageLoader({
            imgixDomain,
            imgixSecureURLToken,
          })}
        />
      </div>
      <div id="timeline-wrapper">
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            width: '100%',
            fontSize: { xs: '4em', sm: '5em', md: '10em' },
            pb: '0.5em',
          }}
        >
          {t('1_timeline_title')}
        </Typography>
        <Timeline />
      </div>
      <div id="image-list">
        <Typography
          variant="h1"
          sx={{
            mt: { xs: '2em' },
            textAlign: 'center',
            width: '100%',
            fontSize: { xs: '4em', sm: '5em', md: '10em' },
            pb: '0.5em',
          }}
        >
          {t('1_life_title')}
        </Typography>
        <ImageList
          imageLoader={getCustomImageLoader({
            imgixDomain,
            imgixSecureURLToken,
            imgixParams: { fit: 'crop', ar: '1:1' },
          })}
        />
      </div>
      <div id="further-info" className="block">
        <FurtherInfo />
      </div>
      <Switch initialValue={i18n.languages[0] === 'en'} />
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      imgixDomain: process.env.NEXT_IMGIX_DOMAIN,
      imgixSecureURLToken: process.env.NEXT_IMGIX_SECURE_TOKEN,
    },
  };
}
