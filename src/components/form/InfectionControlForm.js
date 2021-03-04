import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/Api";
import { Container, Button, Form, Col, Row, Spinner } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
  name: yup.string().required("A name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

function InfectionControlForm() {
  const defaultState = {
    id: "",
  };

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const [InfectionControl, InfectionControlForm] = useState(defaultState);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  const url = BASE_URL + "infectioncontrol/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => InfectionControlForm(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Row className="justify-content-md-center">
        <Spinner animation="grow" size="lg" className="spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    );
  }

  async function onSubmit(data) {
    const url = BASE_URL + "infectioncontrol";
    const options = { headers, method: "POST", body: JSON.stringify(data) };

    fetch(url, options)
      .then((r) => r.json())
      .then((j) => {
        console.log("data");
      });
    console.log("data", data);
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Legg inn Smittevern</h1>
            <div>
              <Form.Group>
                <Form.Label>Fult Navn</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Fyll inn fult navn"
                  ref={register}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter email"
                  ref={register}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </Form.Group>

              <Form.Control
                type="hidden"
                name="infectionControlId"
                defaultValue={InfectionControl.id}
                readOnly
                ref={register}
              />

              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default InfectionControlForm;
