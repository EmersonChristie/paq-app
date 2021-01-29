import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormLabel, FormInput } from "../partials";

import login from "../../../api/routes/auth.routes";
import useApiFetch from "../../../api/hooks/useApiFetch";

export default function LoginForm() {
  const { isLoading, error, data, execute } = useApiFetch();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email: "emersonchristie86@gmail.com",
      password: "password",
    };
    const slug = "/auth/login";
    const options = {
      method: "POST",
      body: JSON.stringify(payload),
    };

    try {
      const response = await execute(slug, options);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container style={{ width: "50%" }} className="justify-content-center my-5">
      {/* {isLoading && <h3>Loading...</h3>}
      {data && <code>{data}</code>}
      {error && <code>{error}</code>} */}
      <h3 className="mb-5 text-center">PAQ Gallery App</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <FormLabel>Email Address</FormLabel>
          <FormInput type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <FormLabel>Password</FormLabel>
          <FormInput type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
