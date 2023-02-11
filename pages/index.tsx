import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import useBgChangeByScroll from '@/Hooks/useBgChangeByScroll';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import { Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Loader from '@/Components/loader/Loader';
import { useLocation } from 'react-router-dom';
import { handleScroll } from '@/Utils/index';
import { Heading } from '@/Interfaces/I_Index';

const IconButton = dynamic(() =>
  import('../src/components/iconButton/IconButton').then((mod) => mod.default),
);
const Intro = dynamic(() => import('../src/components/intro/intro').then((mod) => mod.Intro));
const Timeline = dynamic(() =>
  import('../src/components/timeline/Timeline').then((mod) => mod.default),
);
const ImageList = dynamic(() =>
  import('../src/components/imageList/ImageList').then((mod) => mod.default),
);
const FurtherInfo = dynamic(() =>
  import('../src/components/furtherInfo/furtherInfo').then((mod) => mod.FurtherInfo),
);

export default function Home() {
  const introRef = useRef(null);
  const careerRef = useRef(null);
  const lifeRef = useRef(null);
  const infoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const { hash } = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refs = useMemo(
    () => ({
      intro: introRef,
      career: careerRef,
      life: lifeRef,
      info: infoRef,
    }),
    [introRef, careerRef, lifeRef, infoRef],
  );

  useBgChangeByScroll({ condition: !isLoading, dependencies: [isLoading] });

  useEffect(() => {
    const language = window.navigator.language.split('-')[0] || 'zh';
    Cookies.set('lang', language);
    i18n.changeLanguage(Cookies.get('lang'));
  }, [i18n]);

  // set html lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.languages[0];
  }, [i18n.languages]);

  useEffect(() => {
    if (hash && !isLoading && refs) {
      const position = hash.slice(1, hash.length) as Heading;
      handleScroll(refs[position].current);
    }
  }, [isLoading, refs, hash]);

  return (
    <>
      {isLoading ? (
        <div id="loading-mask">
          <Loader setIsLoading={setIsLoading} />
        </div>
      ) : (
        <div id="container">
          <div id="menu-button" data-aos="fade-up" data-aos-delay={150}>
            <IconButton refs={refs} />
          </div>
          <div id="cover" className="block section" data-bg="#000">
            <div id="cover-text" data-aos="fade-up" data-aos-delay={450}>
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
          <Intro />
          <div ref={careerRef} id="timeline-wrapper" className="section" data-bg="#F5F5F0">
            <Typography
              variant="h1"
              sx={{
                // color: '#000',
                textAlign: 'center',
                width: '100%',
                fontSize: { xs: '4em', sm: '5em', md: '10em' },
                pb: '0.5em',
                pt: i18n.languages[0] === 'en' ? '1em' : 0,
              }}
            >
              {t('1_timeline_title')}
            </Typography>
            <Timeline />
          </div>
          <div ref={lifeRef} id="image-list" className="section" data-bg="#F9E5C9">
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
            <ImageList />
          </div>
          <div ref={infoRef} id="further-info" className="block section" data-bg="#171E27">
            <FurtherInfo />
          </div>
        </div>
      )}
    </>
  );
}
