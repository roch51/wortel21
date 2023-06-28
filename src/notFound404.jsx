import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const NotFound404 = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
          id="pageNotFound"
        >
          <p
            style={{
              fontSize: "50px",
              fontWeight: "500",
              letterSpacing: "20px",
            }}
          >
            Oops! Page not found.
          </p>
          <p
            className="py-5 my-5"
            style={{
              fontSize: "100px",
              fontWeight: "700",
              letterSpacing: "20px",
              paddingLeft: "10px",
              boxShadow: "rgb(136 136 136) 0 5px",
            }}
          >
            404
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "300",
              letterSpacing: "5px",
            }}
          >
            We can't find the page you're looking for.
          </p>
          <button className="btn btn-lg btn-outline-dark">GO BACK HOME</button>
        </div>
      </Container>
    </>
  );
};

export default NotFound404;
