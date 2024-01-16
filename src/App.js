import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication</h1>
          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        {/* Use ProtectedRoutes to guard AuthComponent */}
        <Route path="/auth" element={<ProtectedRoutes element={AuthComponent} />} />
      </Routes>
    </Container>
  );
};

export default App;