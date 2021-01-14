import React from "react";
import FormControl from "react-bootstrap/FormControl";

import styles from "./FormInput.module.css";
import Container from "react-bootstrap/Container";

export default function FormInput(props) {
  return (
    // <Container className={styles.content}>
    <FormControl {...props}></FormControl>
    // {/* <span className={styles.border}></span> */}
    // </Container>
  );
}
