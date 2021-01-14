import React from "react";

import styles from "./Layout.module.css";

import NavBar from "../NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Layout({ children }) {
  return (
    <Container className={styles.layout}>
      <Row className={styles.navContainer}>
        <header>
          <NavBar></NavBar>
        </header>
      </Row>
      <Row className={styles.body}>{children}</Row>
      <Row className={styles.footerContainer}>
        <footer>Footer</footer>
      </Row>
    </Container>
  );
}
