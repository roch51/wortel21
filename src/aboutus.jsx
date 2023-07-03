import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="bg-body-primary text-center overflow-hidden heading-title container-aboutus">
      <div className="my-3 p-3">
        <h2 className="display-5 ">SELAMAT DATANG DI WORTEL21</h2>
        <p className="card-subtitle mb-2 text-muted">
          Ratusan Game Anti-Boring, 1 Akun Bisa Main Apa Aja Sepuasnya!
        </p>
      </div>
      <Row className="aboutus-row justify-content-start">
        <Col className="col-md-5 ">
          <img
            src="/themes2/aboutus-asset01.png"
            alt="aboutus01"
            className="aboutus-image"
          />
        </Col>
        <Col className="col-md-7 aboutus-text">
          <p>
            WORTEL21 merupakan agen situs judi online gacor terbaik untuk
            masyarakat Indonesia. Rasakan keseruan yang telah dirasakan oleh
            pemain lainnya. Jangan ketinggalan permainan terbaru yang seru di
            situs kami. Kami hanya memiliki permainan-permainan terbaik yang
            pastinya bisa bikin cuan terus!
          </p>
          <p>
            Sebagai wadah judi online terpercaya, kami telah mendapatkan lisensi
            resmi dari semua provider. Kami juga memberikan kemudahan bagi
            pemain kami untuk memilih permainan judi online yang dapat diakses
            dimanapun dan kapanpun.
          </p>
          <p>
            Keuntungan bermain judi online kami tentunya adalah rahasia Anda
            terjamin. Kami berkomitmen untuk terus meningkatkan nilai kepuasan
            pemain kami dengan menjaga kepercayaan yang menyediakan layanan Live
            Chat 24 Jam non stop. Beragam permainan judi online yang telah kami
            sediakan dapat dipastikan tidak ada kecurangan dan fairplay.
          </p>
          <p>
            Hanya dengan modal kecil, Anda dapat bermain judi dan pasti bisa
            menang juga untung banyak! Tunggu apa lagi? Gabung dan Main sekarang
            mendadak bisa jadi jutawan!
          </p>
          <button className="btn-wortel-primary-orange btn-aboutus" href="#">
            Ayo Main Sekarang !
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
