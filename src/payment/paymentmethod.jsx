import { Card, Col, Container, Row } from "react-bootstrap";
import "./payment.css";

const Payment = () => {
  return (
    <Container
      className="bg-body-tertiary text-center payment-container heading-title"
      fluid
    >
      <div className="my-3 p-3">
        <h2 className="display-5 ">DEPOSIT SEKARANG, LANGSUNG MAIN!</h2>
        <p className="card-subtitle mb-2 text-muted">
          Top Up Mudah, Banyak Pilihannya
        </p>
      </div>
      <Container>
        <Row className="row-cols-2 row-cols-lg-6 g-4 g-lg-4">
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img className="payment-card-image" src="payment-bri.png" />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img
                className="payment-card-image"
                src="payment-gopay.png"
              />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img className="payment-card-image" src="payment-bca.png" />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img
                className="payment-card-image"
                src="payment-linkaja.png"
              />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img
                className="payment-card-image"
                src="payment-permata.png"
              />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img
                className="payment-card-image"
                src="payment-danamon.png"
              />
            </Card>
          </Col>

          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img className="payment-card-image" src="payment-dana.png" />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img
                className="payment-card-image"
                src="payment-mandiri.png"
              />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img className="payment-card-image" src="payment-cimb.png" />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img
                className="payment-card-image"
                src="payment-maybank.png"
              />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img className="payment-card-image" src="payment-ovo.png" />
            </Card>
          </Col>
          <Col>
            <Card className="payment-card d-flex justify-content-center align-items-center">
              <Card.Img className="payment-card-image" src="payment-bni.png" />
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Payment;
