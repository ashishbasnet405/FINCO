import React from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";

const MainModals = ({
  title,
  size,
  fullScreens,
  modalFooter,
  show,
  handleClose,
  children,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fullscreen={fullScreens}
        size="xl"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        {modalFooter && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default MainModals;
