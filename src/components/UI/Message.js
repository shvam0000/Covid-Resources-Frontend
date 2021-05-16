import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant} className="mt-4">
      <h5>{children}</h5>
    </Alert>
  );
};

//not required
Message.defaultProps = {
  variant: "info",
};

export default Message;
