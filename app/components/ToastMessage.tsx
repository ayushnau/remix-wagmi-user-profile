import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { ToastMessage } from "~/types/user";

const ToastMessage: React.FC<ToastMessage> = ({ show, setShow, message }) => {
  const handleClose = () => setShow(false);

  return (
    <ToastContainer
      className="p-3"
      style={{ zIndex: 1050, position: "fixed", bottom: 0, right: 0 }}
    >
      <Toast
        show={show}
        onClose={handleClose}
        autohide
        delay={3000}
        className="text-light bg-danger border-0 rounded"
      >
        <Toast.Header>
          <strong className="me-auto">Error:</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastMessage;
