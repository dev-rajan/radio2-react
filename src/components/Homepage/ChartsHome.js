import React from "react";
import EnglishCharts from "../common/Charts/EnglishCharts";
import MusicExpress from "../common/Charts/MusicExpress";
import PopCharts from "../common/Charts/PopCharts";

const ChartsHome = () => {
  return (
    <section className="section home-about featured-artists charts">
      <div className="container">
        <div className="row welcome-box wow fadeInUp" data-wow-delay="0.5s">
          <div className="title-item col-sm-12 col-md-12">
            <h1 className="section-title">
              Charts <span className="red-text">Countdown</span>
            </h1>
            <span className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </span>
          </div>

          <div className="chart-box col-sm-4 col-md-4">
            <MusicExpress />
          </div>

          <div className="chart-box col-sm-4 col-md-4">
            <PopCharts />
          </div>

          <div className="chart-box col-sm-4 col-md-4">
            <EnglishCharts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsHome;
