import React from "react";
import { Link } from "react-router-dom";

const RightWhatsOn = () => {
  return (
    <div className="widget-box whats-on-right">
      <h1 className="widget-title">
        What's <span>On</span>
      </h1>
      <div className="boundary">
        <div className="item-news latest-feed">
          <Link to={`/whatsOnDetail`}>
            <figure>
              <img src="https://picsum.photos/360/200" alt="" />
              <span className="number-box">
                <span className="num-title">18</span>
                <span className="months">May</span>
              </span>
            </figure>
            <span className="media-body">
              <span className="main-title">
                Why lorem lipsum is the best dummy text for web world.
              </span>
              <span className="more">Read More</span>
            </span>
          </Link>
        </div>

        <Items
          url={`/whatsOnDetail`}
          title="Last & Furious Youth in France the best Actors."
        />
        <Items
          url={`/whatsOnDetail`}
          title="Simple thing about sensation in France the best Actors."
        />
        <Items
          url={`/whatsOnDetail`}
          title="Inspires LGBTQ Youth in France the best Actors."
        />

        <span className="more-link">
          <Link to={`/whatsOn`} title="Read More" className="more-btns">
            View More <span className="right-icon lnr lnr-arrow-right"></span>
          </Link>
        </span>
      </div>
    </div>
  );
};

const Items = ({ url, title }) => {
  return (
    <div className="item-news">
      <Link to={url}>
        <span className="media-body">
          <span className="main-title">{title}</span>
        </span>
      </Link>
    </div>
  );
};

export default RightWhatsOn;
