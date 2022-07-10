import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { FormContext } from "src/views/staff/Staff";
const AddModals = ({
  title,
  show,
  handleClose,
  handleSubmits,
  rowData = null,
  children,
  footers,
}) => {
  // const { handleSubmits } = useContext(FormContext);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        scrollable={true}
        fullscreen="xl-down"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {footers ? (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmits}>
              Submit
            </Button>
          </Modal.Footer>
        ) : (
          ""
        )}
      </Modal>
    </>
    // <h1>hek</h1>
  );
};

export default AddModals;
