import React, { useEffect, useCallback } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/Assets/logo/lottie-react-logo.json';
import anime from 'animejs';
import { useMediaQuery } from '@mui/material';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Loading({ setIsLoading }: { setIsLoading: (data: boolean) => void }) {
  const matches = useMediaQuery('(max-width:600px)');
  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => setIsLoading(false),
    });

    loader
      .add({
        targets: '#logo',
        delay: 300,
        duration: 400,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo',
        duration: 400,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }, [setIsLoading]);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div id="logo">
      <Lottie speed={1.5} width={matches ? 160 : 300} height={matches ? 160 : 300} options={defaultOptions} />
    </div>
  );
}
