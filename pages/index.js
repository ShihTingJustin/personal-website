import React, { useCallback, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Cookies from 'js-cookie';
import Timeline from '../src/components/timeline/Timeline';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { getIcon } from '../src/utils';
import { useTranslation } from 'react-i18next';
import Switch from '../src/components/switch/Switch';
import Image from 'next/image';

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

const socialData = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/justinhuang777',
  },
  {
    name: 'github',
    url: 'https://github.com/ShihTingJustin',
  },
  {
    name: 'blog',
    url: 'https://medium.com/life-after-hello-world',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/mb722656355s/',
  },
];

export default function Home() {
  const { t, i18n } = useTranslation();

  const imageLoader = useCallback(
    ({ src, width, quality }) => {
      const client = new ImgixClient({
        useHTTPS: true,
        includeLibraryParam: false,
        domain: imgixDomain || 'example.imgix.net',
        secureURLToken: imgixSecureURLToken,
      });
      const baseUrl = `/${src}`;
      const secureUrl = client.buildURL(baseUrl, {
        w: width,
      });
      return secureUrl;
    },
    [imgixDomain, imgixSecureURLToken],
  );

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
        <div className="title-wrapper">
          <div className="photo" data-aos="fade-up">
            <Image
              width="150"
              height="150"
              layout="fill"
              objectFit="cover"
              alt="image"
              src="https://i.imgur.com/1eWvhJah.jpg?1"
            />
          </div>
          <div>
            <div className="title" data-aos="fade-up">
              {t('1_intro_name')}
            </div>
            <div className="subtitle" data-aos="fade-up">
              {t('1_intro_subtitle')}
            </div>
          </div>
        </div>
        <div className="content" data-aos="fade-up">
          {t('1_intro_content_1')}
          <br />
        </div>
        <div className="content" data-aos="fade-up" data-aos-delay={275}>
          {t('1_intro_content_2')}
        </div>
        <div className="content" data-aos="fade-up" data-aos-delay={375}>
          {t('1_intro_content_3')}
        </div>
        {/* <div className="content" data-aos="fade-up">
          想知道我喜歡做些什麼就繼續往下滑吧～
        </div> */}
      </div>
      <div id="timeline-wrapper">
        <Timeline />
      </div>
      <div id="further-info" className="block">
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              textAlign: 'center',
              '>p': {
                textShadow: theme.textGlow,
                background: theme.web3Gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '18px', sm: '24px' },
              },
            }}
          >
            <p>{t('1_further_info')}</p>
            <Box
              sx={{
                display: 'flex',
                '.icon-text': {
                  bgcolor: '#fff',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'capitalize',
                  lineHeight: '18px',
                  fontSize: { xs: '12px', sm: '14px' },
                },

                a: {
                  opacity: 0.3,
                  svg: {
                    fill: '#f6f7f9',
                    m: {
                      xs: '10px 12px 0',
                      sm: '10px 24px 4px',
                    },
                    fontSize: '40px',
                  },

                  '&:hover,&:active': {
                    opacity: 1,
                    svg: {
                      fill: '#fff',
                      transform: 'scale(1.3)',
                    },
                    '.icon-text': {
                      fontSize: { xs: '16px', sm: '18px' },
                    },
                  },
                },
              }}
            >
              {socialData.map((data, index) => (
                <a
                  key={index}
                  href={data.url}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay={200 + Number(index) * 50}
                  data-aos-offset="0"
                  target="_blank"
                  rel="noreferrer"
                >
                  {getIcon(data.name)}
                  <div className="icon-text">{data.name}</div>
                </a>
              ))}
            </Box>
          </Box>
        </ThemeProvider>
      </div>
      <Switch initialValue={i18n.languages[0] === 'en'} />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
