import React from 'react';
import Image, { ImageLoader } from 'next/image';

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

export default function StandardImageList({ imageLoader }: { imageLoader: ImageLoader }) {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        height: '100%',
        paddingTop: { xs: '3em', sm: '10em' },
      }}
    >
      {itemData.map((subArr, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: '4px',
            'div:nth-child(even)': {
              m: '0 4px',
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
            >
              <Image
                loading="lazy"
                width={matches ? 150 : 250}
                height={matches ? 150 : 250}
                objectFit="cover"
                loader={imageLoader}
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
