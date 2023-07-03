import { Col, Container, Figure, Row } from "react-bootstrap";
import "./content.css";

const Content = () => {
  return (
    <Container className="content-body">
      <Row className="heading-title content-text">
        <h2>SITUS JUDI ONLINE TERGACOR & TERPERCAYA</h2>
      </Row>
      <Row>
        <Col md={3} className="content-column">
          <Figure className="text-center content-figure">
            <Figure.Image width={200} height={200} src="image-content4.png" />
            <Figure.Caption className="text-center">
              <h4>
                <b>
                  MAIN GACOR <br />
                  BANYAK BONUS!
                </b>
              </h4>
              <p>
                Dapet bonus mingguan dan extra <br />
                bonus untuk <b>new member!</b>
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col md={3} className="content-column">
          <Figure className="text-center content-figure">
            <Figure.Image width={200} height={200} src="image-content3.png" />
            <Figure.Caption className="text-center">
              <h4>
                <b>
                  DEPOSIT <br />
                  ANTI RIBET
                </b>
              </h4>
              <p>
                Metode pembayaran deposit <br /> banyak pilihan & instan.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col md={3} className="content-column">
          <Figure className="text-center content-figure">
            <Figure.Image width={200} height={200} src="image-content2.png" />
            <Figure.Caption className="text-center">
              <h4>
                <b>
                  AMAN & <br />
                  TERPERCAYA
                </b>
              </h4>
              <p>
                Aman saat main, rahasia <br /> terjamin anti bocor.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col md={3} className="content-column">
          <Figure className="text-center content-figure">
            <Figure.Image width={200} height={200} src="image-content1.png" />
            <Figure.Caption className="text-center">
              <h4>
                <b>
                  LAYANAN <br />
                  24 JAM
                </b>
              </h4>
              <p>
                Ada kendala? Kami siap melayani Anda <br /> 24 jam setiap hari.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
