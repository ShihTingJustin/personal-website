import React from 'react';
import {
  Timeline as TimelineMui,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

import LinkIcon from '@mui/icons-material/Link';
import style from './timeline.module.scss';

import { getIcon } from '../../utils';

interface TimelineData {
  title: string;
  companyName: string;
  url: string;
  period: string;
  content: string;
  skill?: string[];
}

const mockData: TimelineData[] = [
  {
    period: '2021/05 - Present',
    companyName: '1_timeline_company_1',
    url: 'https://www.shoalter.com/',
    title: '1_timeline_title_1',
    content: '1_timeline_content_1',
    skill: [
      'typescript',
      'react',
      'redux',
      'next',
      'sass',
      'tailwind',
      'antd',
      'gatsby',
      'storybook',
      'gitlab',
      'jest',
    ],
  },
  {
    period: '2021/01 - 2021/05',
    companyName: '1_timeline_company_2',
    url: 'https://www.askey.com.tw/tw/',
    title: '1_timeline_title_2',
    content: '1_timeline_content_2',
    skill: ['javascript', 'vue', 'node', 'express', 'aws', 'azure', 'ansible', 'mocha'],
  },
  {
    period: '2016/12 - 2019/09',
    companyName: '1_timeline_company_3',
    url: 'https://www.foxtronev.com/en/',
    title: '1_timeline_title_3',
    content: '1_timeline_content_3',
  },
];

const Timeline = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const { t } = useTranslation();

  return (
    <TimelineMui position={`${matches ? 'right' : 'alternate'}`}>
      {mockData.map((data, index) => (
        <TimelineItem
          sx={{
            // prevent aos item use extra space
            overflow: 'hidden',
          }}
          key={index}
        >
          {/* for RWD */}
          <TimelineOppositeContent
            sx={{
              flex: { sm: 1, xs: 0.1 },
              marginLeft: { xs: -3, sm: 0 },
            }}
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            data-aos={`${matches ? 'fade-left' : index % 2 ? 'fade-right' : 'fade-left'}`}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: `${matches ? 'none' : index % 2 ? 'flex-end' : 'none'}`,
              }}
            >
              <div className={style['title']}>{t(data.title)}</div>
              <div className={style['company-name']}>
                <a href={data.url} target="_blank" rel="noreferrer">
                  {t(data.companyName)}
                  <LinkIcon style={{ fontSize: '16px' }} />
                </a>
              </div>
              <div className={style['period']}>{data.period}</div>
              <div className={style['content']}>
                <p>{t(data.content)}</p>
              </div>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  margin: '0.25em 0 1.5em 0',
                  maxWidth: { xs: '300px', sm: '420px' },
                  svg: {
                    margin: '2px',
                  },
                }}
              >
                {data.skill?.map((skillName, index) => (
                  <div
                    key={index}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={300 + Number(index) * 50}
                    data-aos-offset="0"
                  >
                    {getIcon(skillName)}
                  </div>
                ))}
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineMui>
  );
};

export default Timeline;
