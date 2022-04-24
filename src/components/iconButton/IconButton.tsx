import React, { useState } from 'react';
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

export default function IconButton() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButtonMui
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
        <MenuItemMui>
          <ListItemIconMui sx={{ fontSize: '1em' }}>
            <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
            {t('1_intro_title')}
          </ListItemIconMui>
        </MenuItemMui>
        <MenuItemMui>
          <ListItemIconMui>
            <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
            {t('1_timeline_title')}
          </ListItemIconMui>
        </MenuItemMui>
        <MenuItemMui>
          <ListItemIconMui>
            <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
            {t('1_life_title')}
          </ListItemIconMui>
        </MenuItemMui>
        <MenuItemMui>
          <ListItemIconMui>
            <SegmentIcon sx={{ mr: 1 }} fontSize="small" />
            {t('1_further_info')}
          </ListItemIconMui>
        </MenuItemMui>
        <DividerMui />
        <MenuItemMui>
          <ListItemIconMui sx={{ justifyContent: 'center' }}>
            <Switch initialValue={i18n.languages[0] === 'en'} />
          </ListItemIconMui>
        </MenuItemMui>
      </MenuMui>
    </>
  );
}
