import React, { useState } from 'react';
import SwitchMui, { SwitchProps } from '@mui/material/Switch';
import style from './switch.module.scss';

const Switch = ({ onChange }: SwitchProps) => {
  return (
    <div className={style['switch--root']}>
      中文
      <SwitchMui color="default" onChange={onChange} />
      EN
    </div>
  );
};

export default Switch;
