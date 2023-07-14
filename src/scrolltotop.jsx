import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const customcolor = "#DF7F33" ;

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top-icon">
          {/* <img
            src="https://www.pngfind.com/pngs/m/383-3837846_up-arrow-icon-top-move-to-top-button.png"
            alt="Go to top"
            width="60px"
            height="60px"
          /> */}
          <i className="fa fa-3 fa-angle-up">
            <FontAwesomeIcon icon={faAngleUp} color={customcolor}></FontAwesomeIcon>
          </i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
