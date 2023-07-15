import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/header";
import React from "react";
import Game from "./game/games";
import AboutUs from "./aboutus/aboutus";
import Payment from "./payment/paymentmethod";
import Footer from "./footer";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import NotFound404 from "./notFound404";
import ScrollToTop from "./scrolltotop";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;
