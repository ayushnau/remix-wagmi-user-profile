import React from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

interface ToastMessageProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const ToastMessage: React.FC<ToastMessageProps> = ({
  show,
  setShow,
  message,
}) => {
  const handleClose = () => setShow(false);

  return (
    <ToastContainer
      className="p-3 end-0" // Adjusted for fixed positioning
      style={{ zIndex: 1050, position: "fixed", bottom: 0, right: 0 }} // Ensures toast appears above other content
    >
      <Toast
        show={show}
        onClose={handleClose}
        autohide
        delay={3000} // Auto-hide after 3 seconds
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
