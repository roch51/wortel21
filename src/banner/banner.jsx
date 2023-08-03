import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img
          src="/themes2/background.png"
          alt="Banner"
          className="banner-image"
        />
        <div className="overlay-container">
          <img
            src="/themes2/wortel-banner02.png"
            alt="Overlay"
            className="overlay-image"
          />
          <img
            src="/themes2/rabbit-glasses01.png"
            alt="Overlay2"
            className="overlay-image-2"
          />
        </div>
        <div className="text-container">
          <h2>MENDADAK JUTAWAN !</h2>
          <p>
            Situs Judi Online Terpercaya Total Jackpot Hingga{" "}
            <b>Ratusan Juta Rupiah!</b> Mau Bisa Cuan Banyak Terus?
          </p>
          <p>
            <a
              href="https://wortel21.org"
              style={{ textDecoration: "none" }}
              className="btn-wortel btn-wortel-primary-orange"
            >
              Gabung Sekarang !
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
