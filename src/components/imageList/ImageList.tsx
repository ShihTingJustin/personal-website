import React from 'react';
import Image, { ImageLoader } from 'next/image';

import { useMediaQuery, Box } from '@mui/material';
// import { ImageLoaderProps } from '@/Interfaces/I_Index';

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
                // width: { xs: '100%' },
                // height: { xs: '100%' },
                // maxWidth: { xs: '164px', sm: '10px' },
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

  // return (
  //   <ImageList
  //     sx={{
  //       width: '100%',
  //       height: '100%',
  //       maxWidth: 650,
  //       minWidth: 300,
  //       // width: { xs: 500, sm: 600, md: 800 },
  //       paddingTop: { xs: '3em', sm: '10em' },
  //     }}
  //     cols={3}
  //     gap={matches ? 4 : 10}
  //     // rowHeight={matches ? 164 : 10}
  //   >
  //     {itemData.map((item, index) => (
  //       <ImageListItem key={index}>
  //         <Box
  //           sx={{
  //             display: 'flex',
  //             justifyContent: 'center',
  //             position: 'relative',
  //             overflow: 'hidden',
  //             // width: { xs: '100%' },
  //             // height: { xs: '100%' },
  //             // maxWidth: { xs: '164px', sm: '10px' },
  //           }}
  //         >
  //           <Image
  //             loading="lazy"
  //             width={matches ? 150 : 250}
  //             height={matches ? 150 : 250}
  //             objectFit="cover"
  //             loader={imageLoader}
  //             alt={item.title}
  //             src={item.img}
  //           />
  //         </Box>
  //         {/* <img
  //           src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
  //           srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  //           alt={item.title}
  //           loading="lazy"
  //         /> */}
  //       </ImageListItem>
  //     ))}
  //   </ImageList>
  // );
}
