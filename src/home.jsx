import { Fragment } from "react";
import Banner from "./banner/banner";
import Content from "./content/content";
import Game from "./game/games";
import AboutUs from "./aboutus/aboutus";
import Payment from "./payment/paymentmethod";

const Home = () => {
  return (
    <Fragment>
      <section id="home">
        <Banner />
        <Content />
      </section>
      <section id="game">
        <Game />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="payment">
        <Payment />
      </section>
    </Fragment>
  );
};

export default Home;
