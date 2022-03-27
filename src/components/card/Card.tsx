import React from 'react';
import Image from 'next/image';
import style from './card.module.scss';

interface CardProps {
  icon: string | React.ReactNode;
  iconBgColor: string;
  background: React.ReactNode;
  title: string;
}

const Card = ({ icon, iconBgColor, background, title }: CardProps) => {
  return (
    <div className={style['card--root']}>
      <div className={style['card--image']}>
        <div className={`${style[`card--icon-wrapper`]} ${style[`card--icon-bg-${iconBgColor}`]}`}>
          {typeof icon === 'string' ? (
            <Image width="60" height="60" src={icon} objectFit="contain" alt={`${title}-icon`} />
          ) : (
            icon
          )}
        </div>
        {background}
      </div>
      <div className={style['card--title']}>{title}</div>
    </div>
  );
};

export default Card;
