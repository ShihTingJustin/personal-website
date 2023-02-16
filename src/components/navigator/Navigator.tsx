import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import style from './navigator.module.scss';

const Navigator = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.languages[0]);
  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    const lang = e.target.value;
    setLanguage(lang);
    Cookies.set('lang', lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className={style.navigator}>
      <FormControl>
        <InputLabel>Language</InputLabel>
        <Select
          className={style.select}
          labelId="select-label"
          value={language}
          label="Language"
          onChange={handleLanguageChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'zh'}>中文</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Navigator;
