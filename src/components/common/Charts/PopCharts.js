import React from "react";
import { Link } from "react-router-dom";

const PopCharts = () => {
  return (
    <>
      <h1 className="chart-title">Pop Charts</h1>
      <h2 className="update-date">Updated on: Jan 2, 2019</h2>
      {/* <!--<chart list>--> */}
      <PopChart sn="1" title="Saathi Bhai Aama Buwa" artist="Suman Sigdel" />
      <PopChart
        sn="2"
        title="Yo Man ta Mero Nepali Ho"
        artist="1974 AD Returns"
      />
      <PopChart sn="3" title="Himalalai Dhakyo Kanchha" artist="Rima Subba" />

      <span className="more-btn">
        <Link to={`/#!`} title="More">
          More
        </Link>
      </span>
      {/* <!--</chart list>--> */}
    </>
  );
};

const PopChart = ({ sn, title, artist }) => {
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

export default PopCharts;
