import { Card, Col, Container, Row } from "react-bootstrap";

const Game = () => {
  return (
    <Container
      className="bg-body-tertiary text-center overflow-hidden heading-title game-container"
      fluid
    >
      <div className="my-3 p-3">
        <h2 className="display-5 ">GAME GACOR, GA ADA LAWAN</h2>
        <p className="card-subtitle mb-2 text-muted">
          Ratusan Game Anti-Boring, 1 Akun Bisa Main Apa Aja Sepuasnya!
        </p>
      </div>
      <Container>
        <Row className="row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <Col className="pt-md-4">
            <Card className="game-card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="game-type1.png"
              />
              <Card.Body className="d-flex align-items-center">
                <div className="game-title text-left flex-grow-1">LOTTERY</div>
                <a
                  href="https://wortel21.org"
                  style={{ textDecoration: "none" }}
                  className="btn-wortel-primary-orange"
                >
                  Ayo Main
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-md-4">
            <Card className="game-card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="game-type2.png"
              />
              <Card.Body className="d-flex align-items-center">
                <div className="game-title text-left flex-grow-1">CASINO</div>
                <a
                  className="btn-wortel-primary-orange"
                  href="https://wortel21.org"
                  style={{ textDecoration: "none" }}
                >
                  Ayo Main
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-md-4">
            <Card className="game-card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="game-type3.png"
              />
              <Card.Body className="d-flex align-items-center">
                <div className="game-title text-left flex-grow-1">SLOTS</div>
                <a
                  className="btn-wortel-primary-orange"
                  href="https://wortel21.org"
                  style={{ textDecoration: "none" }}
                >
                  Ayo Main
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-md-4">
            <Card className="game-card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="game-type4.png"
              />
              <Card.Body className="d-flex align-items-center">
                <div className="game-title text-left flex-grow-1">E-SPORT</div>
                <a
                  className="btn-wortel-primary-orange"
                  href="https://wortel21.org"
                  style={{ textDecoration: "none" }}
                >
                  Ayo Main
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-md-4">
            <Card className="game-card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="game-type5.png"
              />
              <Card.Body className="d-flex align-items-center">
                <div className="game-title text-left flex-grow-1">POKER</div>
                <a
                  className="btn-wortel-primary-orange"
                  href="https://wortel21.org"
                  style={{ textDecoration: "none" }}
                >
                  Ayo Main
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-md-4">
            <Card className="game-card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="game-type6.png"
              />
              <Card.Body className="d-flex align-items-center">
                <div className="game-title text-left flex-grow-1">LAINNYA</div>
                <a
                  className="btn-wortel-primary-orange"
                  href="https://wortel21.org"
                  style={{ textDecoration: "none" }}
                >
                  Ayo Main
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Game;
