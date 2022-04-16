import React from 'react';
import Image from 'next/image';
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
import LinkIcon from '@mui/icons-material/Link';
import style from './timeline.module.scss';
import ReactIcon from '../../../public/icon/react.svg';
import ReduxIcon from '../../../public/icon/redux.svg';
import NextIcon from '../../../public/icon/next.svg';
import TsIcon from '../../../public/icon/typescript.svg';
import SassIcon from '../../../public/icon/sass.svg';
import TailwindIcon from '../../../public/icon/tailwind.svg';
import GatsbyIcon from '../../../public/icon/gatsby.svg';
import StorybookIcon from '../../../public/icon/storybook.svg';
import GitlabIcon from '../../../public/icon/gitlab.svg';
import AntdIcon from '../../../public/icon/antd.svg';
import JestIcon from '../../../public/icon/jest.svg';

interface TimelineData {
  companyName: string;
  url: string;
  title: string;
  content: React.ReactNode;
  period: string;
}

const mockData: TimelineData[] = [
  {
    period: '2021/05 - Present',
    companyName: 'Shoalter Technology (HKTV Group)',
    url: 'https://www.shoalter.com/',
    title: 'Software Engineer',
    content: (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          svg: {
            margin: '2px',
          },
        }}
      >
        <TsIcon width="40" height="40" viewBox="0 0 512 512" alt="icon" />
        <ReactIcon style={{ fill: '#1993c0' }} width="40" height="40" alt="icon" />
        <ReduxIcon width="40" height="40" alt="icon" />
        <NextIcon style={{ fill: '#fff' }} alt="icon" />
        <SassIcon width="50" height="40" viewBox="0 0 512 512" alt="icon" />
        <TailwindIcon width="40" height="40" viewBox="0 0 1000 1000" alt="icon" />
        <AntdIcon width="40" height="40" alt="icon" />
        <GatsbyIcon width="40" height="40" alt="icon" />
        <StorybookIcon width="40" height="40" alt="icon" />
        <GitlabIcon width="50" height="50" alt="icon" />
        <JestIcon width="40" height="40" alt="icon" />
      </Box>
    ),
  },
  {
    period: '2021/01 - 2021/05',
    companyName: 'Askey (ASUS Group)',
    url: 'https://www.askey.com.tw/tw/',
    title: 'Software Engineer',
    content: <div>123</div>,
  },
  {
    period: '2016/12 - 2019/09',
    companyName: 'HAITEC (Yulon Group)',
    url: 'https://www.foxtronev.com/en/',
    title: 'Product Manager',
    content: <div>123</div>,
  },
];

const Timeline = () => {
  return (
    <TimelineMui
      position="alternate"
      // sx={{ marginTop: '-10vw' }}
    >
      {mockData.map((data, index) => (
        <TimelineItem key={index}>
          {/* RWD */}
          {/* <TimelineOppositeContent>{data.title}</TimelineOppositeContent> */}
          <TimelineSeparator
            sx={{
              height: '25vh',
            }}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos={`${index % 2 ? 'fade-right' : 'fade-left'}`}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <div className={style['title']}>{data.title}</div>
              <div className={style['company-name']}>
                <a href={data.url} target="_blank" rel="noreferrer">
                  {data.companyName}
                  <LinkIcon style={{ fontSize: '16px' }} />
                </a>
              </div>
              <div className={style['period']}>{data.period}</div>
              {data.content}
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineMui>
  );
};

export default Timeline;
