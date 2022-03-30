import React from 'react';
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
      <ModalBootstrap.Body>{children}</ModalBootstrap.Body>
    </ModalBootstrap>
  );
};

export default Modal;
