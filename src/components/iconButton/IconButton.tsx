import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  IconButton as IconButtonMui,
  Menu as MenuMui,
  MenuItem as MenuItemMui,
  ListItemIcon as ListItemIconMui,
  Divider as DividerMui,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@/Components/switch/Switch';
import SegmentIcon from '@mui/icons-material/Segment';
import { useMediaQuery, Box } from '@mui/material';

interface Refs {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}

export default function IconButton({ refs }: { refs: Refs }) {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (ref: HTMLElement | null) => {
    if (ref)
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <>
      {matches ? (
        <>
          <IconButtonMui
            aria-label="menu"
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon
              sx={{
                color: '#f6f7f9',
              }}
            />
          </IconButtonMui>
          <MenuMui
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                div: { color: '#f7f8f9' },
                bgcolor: 'rgb(18, 18, 18)',
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Link to="/#intro" onClick={() => handleScroll(refs.intro.current)}>
              <MenuItemMui>
                <ListItemIconMui sx={{ fontSize: '1em', w: '100%' }}>
                  <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
                  {t('1_intro_title')}
                </ListItemIconMui>
              </MenuItemMui>
            </Link>
            <Link to="/#career" onClick={() => handleScroll(refs.career.current)}>
              <MenuItemMui>
                <ListItemIconMui>
                  <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
                  {t('1_timeline_title')}
                </ListItemIconMui>
              </MenuItemMui>
            </Link>
            <Link to="/#life" onClick={() => handleScroll(refs.life.current)}>
              <MenuItemMui>
                <ListItemIconMui>
                  <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
                  {t('1_life_title')}
                </ListItemIconMui>
              </MenuItemMui>
            </Link>
            <Link to="/#info" onClick={() => handleScroll(refs.info.current)}>
              <MenuItemMui>
                <ListItemIconMui>
                  <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
                  {t('1_further_info')}
                </ListItemIconMui>
              </MenuItemMui>
            </Link>
            <DividerMui />
            <MenuItemMui>
              <ListItemIconMui sx={{ justifyContent: 'center' }}>
                <Switch initialValue={i18n.languages[0] === 'en'} />
              </ListItemIconMui>
            </MenuItemMui>
          </MenuMui>
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            a: {
              mx: 1.75,
              p: 1,
              duration: 500,
              '&:hover,&:active': {
                duration: 500,
                transform: 'scale(1.2)',
                div: {
                  duration: 500,
                  color: '#3cc3e8',
                  fontWeight: 'bolder',
                },
              },
            },
          }}
        >
          <Link to="/#intro" onClick={() => handleScroll(refs.intro.current)}>
            <ListItemIconMui sx={{ fontSize: '1em', w: '100%' }}>
              <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
              {t('1_intro_title')}
            </ListItemIconMui>
          </Link>
          <Link to="/#career" onClick={() => handleScroll(refs.career.current)}>
            <ListItemIconMui>
              <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
              {t('1_timeline_title')}
            </ListItemIconMui>
          </Link>
          <Link to="/#life" onClick={() => handleScroll(refs.life.current)}>
            <ListItemIconMui>
              <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
              {t('1_life_title')}
            </ListItemIconMui>
          </Link>
          <Link to="/#info" onClick={() => handleScroll(refs.info.current)}>
            <ListItemIconMui>
              <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
              {t('1_further_info')}
            </ListItemIconMui>
          </Link>
          <ListItemIconMui sx={{ justifyContent: 'center' }}>
            <Switch initialValue={i18n.languages[0] === 'en'} />
          </ListItemIconMui>
        </Box>
      )}
    </>
  );
}
