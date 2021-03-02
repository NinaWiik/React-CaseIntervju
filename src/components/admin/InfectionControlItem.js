import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function InfectionControlItem({ id, name, email }) {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <p>
            <b>Fornavn og Etternavn:</b> {name}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

InfectionControlItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default InfectionControlItem;
