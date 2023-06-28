import { Card, Col, Container, Row } from "react-bootstrap";
import "./content.css";

const Content = () => {
  return (
    <Container className="content-body">
      <Row className="heading-title content-text">
        <h2>SITUS JUDI ONLINE TERGACOR & TERPERCAYA</h2>
      </Row>
      <Row>
        <Col md={3} className="content-column">
          <Card className="content-card text-center">
            <Card.Img
              src="image-content4.png"
              className="image-content"
              width="200px"
              height="200px"
            />
            <Card.Body>
              <Card.Title className="content-card-title">
                <b>
                  MAIN GACOR <br />
                  BANYAK BONUS!
                </b>
              </Card.Title>
              <Card.Text className="content-card-text">
                Dapet bonus mingguan dan extra bonus untuk <br />{" "}
                <b>new member!</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="content-column">
          <Card className="content-card">
            <Card.Img
              src="image-content3.png"
              className="image-content"
              width="200px"
              height="200px"
            />
            <Card.Body>
              <Card.Title className="content-card-title">
                <b>
                  DEPOSIT <br />
                  ANTI RIBET
                </b>
              </Card.Title>
              <Card.Text className="content-card-text">
                Metode pembayaran deposit banyak pilihan & instan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="content-column">
          <Card className="content-card">
            <Card.Img
              src="image-content2.png"
              className="image-content"
              width="200px"
              height="200px"
            />
            <Card.Body>
              <Card.Title className="content-card-title">
                <b>
                  AMAN & <br />
                  TERPERCAYA
                </b>
              </Card.Title>
              <Card.Text className="content-card-text">
                Aman saat main, rahasia terjamin anti bocor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="content-column">
          <Card className="content-card">
            <Card.Img
              src="image-content1.png"
              className="image-content"
              width="200px"
              height="200px"
            />
            <Card.Body>
              <Card.Title className="content-card-title">
                <b>
                  LAYANAN <br />
                  24 JAM
                </b>
              </Card.Title>
              <Card.Text className="content-card-text">
                Ada kendala? Kami siap melayani Anda 24 jam setiap hari.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
