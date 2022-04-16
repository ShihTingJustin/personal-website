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
interface TimelineData {
  companyName?: string;
  title: string;
  content: React.ReactNode;
  type: string;
}

const mockData: TimelineData[] = [
  {
    companyName: 'Shoalter Technology',
    title: 'Software Engineer',
    content: <div>123</div>,
    type: 'job',
  },
  {
    companyName: 'Askey',
    title: 'Software Engineer',
    content: <div>123</div>,
    type: 'job',
  },
  {
    companyName: 'HAITEC',
    title: 'Product Manager',
    content: <div>123</div>,
    type: 'job',
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
            sx={
              {
                height: '25vh',
              }
            }
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos={`${index % 2 ? 'fade-right' : 'fade-left'}`}>
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
              <div>{data.companyName}</div>
              <div>{data.title}</div>
              {data.content}
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineMui>
  );
};

export default Timeline;
