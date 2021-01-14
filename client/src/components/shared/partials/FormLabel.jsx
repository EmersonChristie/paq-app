import React from "react";
import Form from "react-bootstrap/Form";

export default function FormLabel({ children }) {
  return (
    <>
      <Form.Label className="font-weight-light">{children}</Form.Label>
    </>
  );
}
