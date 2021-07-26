import React from "react";
import { Link } from "react-router-dom";
import { Programs } from "../../Homepage/FeaturedProgram";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RightProgram = () => {
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
        Featured <span>Programmes</span>
      </h1>
      <div className="boundary">
        <div className="artist-slider">
          <OwlCarousel className="nav-none" {...options}>
            <Programs />
          </OwlCarousel>
        </div>
        <span className="more-link">
          <Link to={`/shows`} title="Read More" className="more-btns">
            View More
            <span className="right-icon lnr lnr-arrow-right"></span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RightProgram;
