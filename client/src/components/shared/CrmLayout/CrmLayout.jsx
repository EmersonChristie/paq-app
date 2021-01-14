import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import CrmNav from "../CrmNav/CrmNav";

import styles from "./CrmLayout.module.css";

export default function CrmLayout({ children }) {
  return (
    <Container fluid className="min-vh-100" className={styles.container}>
      <CrmNav></CrmNav>

      {/* Begin Body */}
      {/* <Row className="body d-flex justify-content-center h-100 bg-primary"> */}
      <Col className="h-100">{children}</Col>
      {/* </Row> */}
    </Container>
  );
}
