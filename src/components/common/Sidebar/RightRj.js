import React from "react";
import { Link } from "react-router-dom";
import { RjHome } from "../../Homepage/HomeRjs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RightRj = () => {
  const options = {
    items: 1,
    loop: true,
    rewind: true,
    autoplay: true,
    singleItem: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    dots: true,
    responsiveClass: true,
  };
  return (
    <div className="widget-box whats-on-right">
      <h1 className="widget-title">
        Our <span>RJs</span>
      </h1>
      <div className="boundary">
        <div className="artist-slider">
          <OwlCarousel className="nav-none" {...options}>
            <RjHome />
          </OwlCarousel>
        </div>
        <span className="more-link">
          <Link to={`/rjs`} title="Read More" className="more-btns">
            View More
            <span className="right-icon lnr lnr-arrow-right"></span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RightRj;
