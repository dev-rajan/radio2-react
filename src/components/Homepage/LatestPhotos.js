import React from "react";
import { Link } from "react-router-dom";

const LatestPhotos = () => {
  return (
    <section className="section home-about featured-artists charts videos">
      <div className="container">
        <div className="row welcome-box wow fadeInUp" data-wow-delay="0.5s">
          <div className="title-item col-sm-12 col-md-12">
            <h1 className="section-title">
              Latest <span className="red-text">Photos</span>
              <span className="more-link">
                <Link to={`/photos`} title="Read More" className="more-btns">
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

          <PhotosHome
            url={`/photos`}
            extraClass="video-feat photo-feat"
            width="6"
            image={`https://picsum.photos/360/300`}
            title="EA YouTube Sensation Inspires LGBTQ Youth in France the best
            Actors."
            qty="20"
          />
          <PhotosHome
            url={`/photos`}
            extraClass="photo-feed"
            width="3"
            image={`https://picsum.photos/360/200?random`}
            title="National Award goes to be in Dubai the Famouse Country."
            qty="15"
          />
          <PhotosHome
            url={`/photos`}
            width="3"
            image={`https://picsum.photos/360/200`}
            title="The Establishment of YouTube Sensation Inspires LGBTQ Youth
            in France"
            qty="25"
          />
        </div>
      </div>
    </section>
  );
};

const PhotosHome = ({ url, width, extraClass, image, title, qty }) => {
  return (
    <div
      className={`chart-box news-feed video-feed ${extraClass} col-sm-${width} col-md-${width}`}
    >
      <div className="item-news media">
        <Link to={url}>
          <figure>
            <img src={image} alt={title} />
          </figure>
          <span className="media-body">
            <span className="main-title">{title}</span>
            <span className="song-album">{qty} Images</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LatestPhotos;
