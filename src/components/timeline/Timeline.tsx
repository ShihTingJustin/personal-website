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
import JsIcon from '../../../public/icon/javascript.svg';
import VueIcon from '../../../public/icon/vue.svg';
import NodeIcon from '../../../public/icon/node.svg';
import ExpressIcon from '../../../public/icon/express.svg';
import AwsIcon from '../../../public/icon/aws.svg';
import AzureIcon from '../../../public/icon/azure.svg';
import AnsibleIcon from '../../../public/icon/ansible.svg';
import MochaIcon from '../../../public/icon/mocha.svg';

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
      <>
        <p>
          負責香港電商巨擘 HKTVmall 所有 IT
          專案的前端項目，參與需求分析、使用者體驗及可行性評估、開發及維護。
        </p>
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
      </>
    ),
  },
  {
    period: '2021/01 - 2021/05',
    companyName: 'Askey (ASUS Group)',
    url: 'https://www.askey.com.tw/tw/',
    title: 'Software Engineer',
    content: (
      <>
        <p>
          使用 Azure Pipeline 及 Ansible 建立 CI pipeline 運行自動化測試，將測試報告儲存至 AWS
          S3，可透過 AWS CloudFront 從外部存取。
        </p>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            svg: {
              margin: '2px',
            },
          }}
        >
          <JsIcon width="40" height="40" alt="icon" />
          <VueIcon width="40" height="40" alt="icon" />
          <NodeIcon width="40" height="40" alt="icon" />
          <ExpressIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />
          <AwsIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />
          <AzureIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />
          <AnsibleIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />
          <MochaIcon width="40" height="40" alt="icon" />
        </Box>
      </>
    ),
  },
  {
    period: '2016/12 - 2019/09',
    companyName: 'HAITEC (Yulon Group)',
    url: 'https://www.foxtronev.com/en/',
    title: 'Product Manager',
    content: <p>代表華創研發團隊與裕隆集團納智捷價值鏈相關公司合作進行產品企劃及規格配備提案。</p>,
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
              // minHeight: '25vh',
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
              <div className={style['content']}>{data.content}</div>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineMui>
  );
};

export default Timeline;
