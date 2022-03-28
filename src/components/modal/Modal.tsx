import React, { useState } from 'react';

import style from './modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <div className={style['modal--root']}>{children}</div>;
};

export default Modal;
