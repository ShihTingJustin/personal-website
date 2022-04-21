import React, { useEffect, useState } from 'react';
import SwitchMui, { SwitchProps as SwitchPropsMui } from '@mui/material/Switch';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import style from './switch.module.scss';

interface SwitchProps extends SwitchPropsMui {
  initialValue: boolean;
}

const Switch = ({ initialValue }: SwitchProps) => {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState<boolean>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (e.target.checked) Cookies.set('lang', 'en');
    else Cookies.set('lang', 'zh');
    i18n.changeLanguage(Cookies.get('lang'));
  };

  return (
    <div className={style['switch--root']}>
      <label htmlFor="sw" className={style['switch--zh']}>
        中文
      </label>
      <SwitchMui id="sw" color="default" checked={checked} onChange={handleChange} />
      <label htmlFor="sw" className={style['switch--en']}>
        EN
      </label>
    </div>
  );
};

export default Switch;
