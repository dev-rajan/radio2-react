import React from "react";
import MusicExpress from "../Charts/MusicExpress";
import PopCharts from "../Charts/PopCharts";
import EnglishCharts from "../Charts/EnglishCharts";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RightCharts = () => {
  const options = {
    items: 1,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayHoverPause: true,
    singleItem: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    dots: true,
    responsiveClass: true,
  };
  return (
    <div className="widget-box whats-on-right">
      <h1 className="widget-title">
        Chart <span>Countdowns</span>
      </h1>
      <div className="boundary">
        <div className="artist-slider">
          <OwlCarousel className="nav-none" {...options}>
            <div className="chart-box">
              <MusicExpress />
            </div>

            <div className="chart-box">
              <PopCharts />
            </div>

            <div className="chart-box">
              <EnglishCharts />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default RightCharts;
