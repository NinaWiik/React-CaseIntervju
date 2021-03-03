import React from "react";
import InfectionControlItem from "./InfectionControlItem";
import { Container, Col, Row } from "react-bootstrap";

function InfectionControl() {
  <form name="contact" method="POST" data-netlify="true">
    <o>
      <label>
        Your Name: <input type="text" name="name" />
      </label>
    </o>
    <button type="submit">Send</button>
  </form>;
}

/*function InfectionControl() {
  const [infectionControl, setInfectionControl] = useState([]);

  const url = BASE_URL + "infectionControl";

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setInfectionControl(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={5} xs={12}>
          <h2>Smittevern opplysninger</h2>
          {infectionControl.map(function (infectionControlInfo) {
            const { id, name, email } = infectionControlInfo;
            return (
              <Row key={infectionControlInfo.id}>
                <Col md={12}>
                  <InfectionControlItem id={id} name={name} email={email} />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}*/

export default InfectionControl;
