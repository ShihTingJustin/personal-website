import React from 'react';
import Image from 'next/image';
import { Modal as ModalBootstrap } from 'react-bootstrap';

interface ModalProps {
  bg: string;
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: (value: boolean) => void;
}

const Modal = ({ bg, isOpen, children, setModalOpen }: ModalProps) => {
  return (
    <ModalBootstrap
      data-bg={bg}
      centered
      fullscreen
      show={isOpen}
      onHide={() => setModalOpen(false)}
    >
      <ModalBootstrap.Header closeButton closeVariant="white"></ModalBootstrap.Header>
      <ModalBootstrap.Body>
        <div className="modal-body-content-wrapper">
          {/* <Image
            src="/image/react-logo.webp"
            width="300"
            height="300"
            objectFit="contain"
            alt="pic"
          /> */}
          <div>{children}</div>
        </div>
      </ModalBootstrap.Body>
    </ModalBootstrap>
  );
};

export default Modal;
