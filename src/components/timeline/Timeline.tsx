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
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../../src/theme';

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
import JsIcon from '../../../public/icon/javascript.svg';
import VueIcon from '../../../public/icon/vue.svg';
import NodeIcon from '../../../public/icon/node.svg';
import ExpressIcon from '../../../public/icon/express.svg';
import AwsIcon from '../../../public/icon/aws.svg';
import AzureIcon from '../../../public/icon/azure.svg';
import AnsibleIcon from '../../../public/icon/ansible.svg';
import MochaIcon from '../../../public/icon/mocha.svg';

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

const getIcon = (icon: string) => {
  switch (icon) {
    case 'typescript':
      return <TsIcon width="40" height="40" viewBox="0 0 512 512" alt="icon" />;
    case 'react':
      return <ReactIcon style={{ fill: '#1993c0' }} width="40" height="40" alt="icon" />;
    case 'redux':
      return <ReduxIcon width="40" height="40" alt="icon" />;
    case 'next':
      return <NextIcon style={{ fill: '#fff' }} alt="icon" />;
    case 'sass':
      return <SassIcon width="50" height="40" viewBox="0 0 512 512" alt="icon" />;
    case 'tailwind':
      return <TailwindIcon width="40" height="40" viewBox="0 0 1000 1000" alt="icon" />;
    case 'antd':
      return <AntdIcon width="40" height="40" alt="icon" />;
    case 'gatsby':
      return <GatsbyIcon width="40" height="40" alt="icon" />;
    case 'storybook':
      return <StorybookIcon width="40" height="40" alt="icon" />;
    case 'gitlab':
      return <GitlabIcon width="50" height="50" alt="icon" />;
    case 'jest':
      return <JestIcon width="40" height="40" alt="icon" />;
    case 'javascript':
      return <JsIcon width="40" height="40" alt="icon" />;
    case 'vue':
      return <VueIcon width="40" height="40" alt="icon" />;
    case 'node':
      return <NodeIcon width="40" height="40" alt="icon" />;
    case 'express':
      return <ExpressIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'aws':
      return <AwsIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'azure':
      return <AzureIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'ansible':
      return <AnsibleIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'mocha':
      return <MochaIcon width="40" height="40" alt="icon" />;
    default:
      return;
  }
};

const Timeline = () => {
  const matches = useMediaQuery('(max-width:600px)');
  console.log({ matches });
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
