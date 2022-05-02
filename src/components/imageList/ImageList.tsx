import React from 'react';
import Image from 'next/image';
import { getCustomImageLoader } from '@/Utils/index';

import { useMediaQuery, Box } from '@mui/material';

const itemData = [
  [
    {
      img: 'tainan4.jpg',
      title: '',
    },

    {
      img: 'tainan.jpg',
      title: '',
    },
    {
      img: 'tainan3.jpg',
      title: '',
    },
  ],
  [
    {
      img: 'tainan2.jpg',
      title: '',
    },
    {
      img: 'acalumni.jpg',
      title: '',
    },

    {
      img: 'mountain.jpg',
      title: '',
    },
  ],
  [
    {
      img: 'roadster.jpg',
      title: '',
    },

    {
      img: 'autoshow.jpg',
      title: '',
    },
    {
      img: 'luxgen.jpg',
      title: '',
    },
  ],
  [
    {
      img: 'aclass.jpg',
      title: '',
    },
    {
      img: 'me2.jpg',
      title: '',
    },

    {
      img: 'coast.jpg',
      title: '',
    },
  ],
];

export default function StandardImageList() {
  const matches = useMediaQuery('(max-width:400px)');

  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      {itemData.map((subArr, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: '4px', sm: '12px' },
            'div:nth-of-type(even)': {
              m: { xs: '0 4px', sm: '0 12px' },
            },
          }}
        >
          {subArr.map((sub, subIndex) => (
            <Box
              key={subIndex}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay={300 + Number(subIndex) * 100}
              data-aos-offset="0"
            >
              <Image
                loading="lazy"
                width={matches ? 150 : 250}
                height={matches ? 150 : 250}
                objectFit="cover"
                loader={getCustomImageLoader({
                  w: matches ? 200 : 350,
                  fit: 'crop',
                  ar: '1:1',
                })}
                alt={sub.title}
                src={sub.img}
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
