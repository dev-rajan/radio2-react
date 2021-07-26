import React from "react";
import { Link } from "react-router-dom";

const RightVideos = () => {
  return (
    <div className="widget-box whats-on-right">
      <h1 className="widget-title">
        Latest <span>Videos</span>
      </h1>
      <div className="boundary">
        <div className="item-news latest-feed">
          <Link to={`/videoDetail`}>
            <figure>
              <img src={`https://picsum.photos/360/200?random`} alt="" />
            </figure>
            <span className="media-body">
              <span className="main-title">Holy Humgama at Nagarkot</span>
              <span className="more">Read More</span>
            </span>
          </Link>
        </div>

        <span className="more-link">
          <Link to={`/videos`} title="View More" className="more-btns">
            View More
            <span className="right-icon lnr lnr-arrow-right"></span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RightVideos;
