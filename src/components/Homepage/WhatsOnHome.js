import React from "react";
import { Link } from "react-router-dom";

const WhatsOnHome = () => {
  return (
    <section className="section home-about featured-artists charts">
      <div className="container">
        <div className="row welcome-box wow fadeInUp" data-wow-delay="0.5s">
          <div className="title-item col-sm-12 col-md-12">
            <h1 className="section-title">
              What's <span className="red-text">On</span>
              <span className="more-link">
                <Link to={`/whatsOn`} title="Read More" className="more-btns">
                  View More
                  <span className="right-icon lnr lnr-arrow-right"></span>
                </Link>
              </span>
            </h1>
            <span className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </span>
          </div>

          <HomeWhatsOn
            url={`/whatsOnDetail`}
            image={`https://picsum.photos/360/200`}
            title="EA YouTube Sensation Inspires LGBTQ Youth in France the best
                    Actors."
            day="18"
            month="May"
          />
          <HomeWhatsOn
            url={`/whatsOnDetail`}
            image={`https://picsum.photos/360/200?random`}
            title="National Award goes to be in Dubai the Famouse Country."
            day="12"
            month="May"
          />
          <HomeWhatsOn
            url={`/whatsOnDetail`}
            image={`https://picsum.photos/360/200`}
            title="The Establishment of YouTube Sensation Inspires LGBTQ Youth
                    in France"
            day="5"
            month="May"
          />
        </div>
      </div>
    </section>
  );
};

const HomeWhatsOn = ({ url, image, title, day, month }) => {
  return (
    <div className="chart-box news-feed col-sm-4 col-md-4">
      <div className="item-news media">
        <Link to={url}>
          <img src={image} alt={title} />

          <figure className="mr-3">
            <span className="number-box">
              <span className="num-title">{day}</span>
              <span className="months">{month}</span>
            </span>
          </figure>
          <span className="media-body">
            <span className="main-title">{title}</span>
            <span className="song-album">Read More</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default WhatsOnHome;
