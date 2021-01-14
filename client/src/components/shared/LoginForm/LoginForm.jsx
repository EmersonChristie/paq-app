import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormLabel, FormInput } from "../partials";

import login from "../../../api/routes/auth.routes";
import useApiFetch from "../../../api/hooks/useApiFetch";
import useLogin from "../../../api/hooks/useLogin";

export default function LoginForm() {
  // const { login, isLoading, error, data, execute = () => {} } = useLogin();
  const { isLoading, error, data, execute } = useApiFetch();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email: "emersonchristie86@gmail.com",
      password: "password",
    };
    try {
      const response = await execute(login, payload);
      console.log(
        "🚀 ~ file: LoginForm.jsx ~ line 18 ~ handleOnSubmit ~ response",
        response
      );

      // response = response from the API call
      // redirect if needed using the `response` or do anything
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
