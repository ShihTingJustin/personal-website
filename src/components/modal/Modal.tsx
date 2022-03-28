import React from 'react';

import style from './modal.module.scss';
import Close from '../../../public/icon/close.svg';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: (value: boolean) => void;
}

const Modal = ({ isOpen, children, setModalOpen }: ModalProps) => {
  return (
    <div data-open={isOpen} className={style['modal--root']}>
      <div className={style['close-button']} onClick={() => setModalOpen(false)}>
        <Close />
      </div>
      <div className={style['content']}>{children}</div>
    </div>
  );
};

export default Modal;
