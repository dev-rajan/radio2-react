import React from "react";
import { Link } from "react-router-dom";

const EnglishCharts = () => {
  return (
    <>
      <h1 className="chart-title">English Charts</h1>
      <h2 className="update-date">Updated on: Jan 2, 2019</h2>
      {/* <!--<chart list>--> */}
      <EnglishChart sn="1" title="18 till I Die" artist="Bryan Adams" />
      <EnglishChart
        sn="2"
        title="Last Christmas I Gave You"
        artist="George Michale"
      />
      <EnglishChart
        sn="3"
        title="Everynight In My Dream"
        artist="Kate Winstlet"
      />

      <span className="more-btn">
        <Link to={`/#!`} title="More">
          More
        </Link>
      </span>
      {/* <!--</chart list>--> */}
    </>
  );
};

const EnglishChart = ({ sn, title, artist }) => {
  return (
    <div className="item-news media">
      <figure className="mr-3">
        <span className="number-box">
          <span className="num-title">{sn}</span>
          <span className="status move-up">
            <span className="left-icon fa fa-sort-asc"></span>
          </span>
        </span>
      </figure>
      <span className="media-body">
        <span className="main-title">{title}</span>
        <span className="song-album">{artist}</span>
      </span>
    </div>
  );
};

export default EnglishCharts;
