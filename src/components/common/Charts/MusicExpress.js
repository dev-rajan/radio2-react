import React from "react";
import { Link } from "react-router-dom";

const MusicExpress = () => {
  return (
    <>
      <h1 className="chart-title">Music Express</h1>
      <h2 className="update-date">Updated on: Jan 2, 2019</h2>
      {/* <!--<chart list>--> */}
      <MusicChart sn="1" title="Parkha Parkha Mayalu" album="Mangalam" />
      <MusicChart sn="2" title="Yati Yeti Pani Ganga Rani" album="Kri" />
      <MusicChart sn="3" title="Rupai Mohani Naran" album="Shatru Gate" />

      <span className="more-btn">
        <Link to="/#!" title="More">
          More
        </Link>
      </span>
      {/* <!--</chart list>--> */}
    </>
  );
};

const MusicChart = ({ sn, title, album }) => {
  return (
    <div className="item-news media">
      <figure className="mr-3">
        <span className="number-box">
          <span className="num-title">{sn}</span>
          <span className="status non-mover ">
            <span className="left-icon icon-sort fa fa-sort"></span>
          </span>
        </span>
      </figure>
      <span className="media-body">
        <span className="main-title">{title}</span>
        <span className="song-album">{album}</span>
      </span>
    </div>
  );
};

export default MusicExpress;
