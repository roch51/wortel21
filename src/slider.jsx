import { Carousel } from "react-bootstrap";

const Slider = () => {
  return  (<Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="carousel.png"
        alt="First slide"
        height="680px"
      />
      <Carousel.Caption className="text-end">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="carousel.png"
        alt="Second slide"
        height="680px"
      />

      <Carousel.Caption className="text-end">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="carousel.png"
        alt="Third slide"
        height="680px"
      />

      <Carousel.Caption className="text-end">
        <h3>MENDADAK JUTAWAN!</h3>
        <p>
          Situs Judi Online Terpercaya Total Jackpot Hingga Ratusan Juta Rupiah! Mau Bisa Cuan Banyak Terus?
        </p>
        <p><a className="btn btn-md outline-warning-white" href="#">Gabung Sekarang!</a></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);
}
 
export default Slider;