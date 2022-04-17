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
    companyName: 'Shoalter Technology (HKTV Group)',
    url: 'https://www.shoalter.com/',
    title: 'Software Engineer',
    content:
      '負責香港電商巨擘 HKTVmall 所有 IT 專案的前端項目，參與需求分析、使用者體驗及可行性評估、開發及維護。',
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
    companyName: 'Askey (ASUS Group)',
    url: 'https://www.askey.com.tw/tw/',
    title: 'Software Engineer',
    content:
      '使用 Azure Pipeline 及 Ansible 建立 CI pipeline 運行自動化測試，將測試報告儲存至 AWS S3，可透過 AWS CloudFront 從外部存取。',
    skill: ['javascript', 'vue', 'node', 'express', 'aws', 'azure', 'ansible', 'mocha'],
  },
  {
    period: '2016/12 - 2019/09',
    companyName: 'HAITEC (Yulon Group)',
    url: 'https://www.foxtronev.com/en/',
    title: 'Product Manager',
    content: '代表華創研發團隊與裕隆集團納智捷價值鏈相關公司合作進行產品企劃及規格配備提案。',
  },
];

const Timeline = () => {
  const matches = useMediaQuery('(max-width:600px)');

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
              <div className={style['title']}>{data.title}</div>
              <div className={style['company-name']}>
                <a href={data.url} target="_blank" rel="noreferrer">
                  {data.companyName}
                  <LinkIcon style={{ fontSize: '16px' }} />
                </a>
              </div>
              <div className={style['period']}>{data.period}</div>
              <div className={style['content']}>
                <p>{data.content}</p>
              </div>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  maxWidth: '400px',
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
