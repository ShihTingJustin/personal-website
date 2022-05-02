import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getCustomImageLoader } from '@/Utils/index';

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="title-wrapper">
        <div className="photo" data-aos="fade-up">
          <Image
            priority
            width={150}
            height={150}
            loader={getCustomImageLoader({})}
            objectFit="cover"
            alt="image"
            src={'me.JPG'}
          />
        </div>
        <div className="title-and-subtitle-wrapper">
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
    </>
  );
};
