import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import { Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import IconButton from '@/Components/iconButton/IconButton';
import Timeline from '@/Components/timeline/Timeline';
import ImageList from '@/Components/imageList/ImageList';
import { Intro } from '@/Pages/home/intro';
import { FurtherInfo } from '@/Pages/home/furtherInfo';

import { getCustomImageLoader } from '@/Utils/index';

export default function Home() {
  const introRef = useRef(null);
  const careerRef = useRef(null);
  const lifeRef = useRef(null);
  const infoRef = useRef(null);
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div id="container">
              <div id="menu-button">
                <IconButton
                  refs={{
                    intro: introRef,
                    career: careerRef,
                    life: lifeRef,
                    info: infoRef,
                  }}
                />
              </div>
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
              <div ref={introRef} id="intro-wrapper" className="block">
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
                <Intro imageLoader={getCustomImageLoader({})} />
              </div>
              <div ref={careerRef} id="timeline-wrapper">
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
              <div ref={lifeRef} id="image-list">
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
                    imgixParams: { fit: 'crop', ar: '1:1' },
                  })}
                />
              </div>
              <div ref={infoRef} id="further-info" className="block">
                <FurtherInfo />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
