import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Pagination from "../common/Pagination";
import Rj1 from "../../assets/images/rj01.jpg";
import Rj2 from "../../assets/images/rj02.jpg";
import Rj3 from "../../assets/images/rj03.jpg";
import Rj4 from "../../assets/images/rj04.jpg";
import { Link } from "react-router-dom";

const Rjs = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">What's On</h1>
              <h2 className="description">
                Asia at Sea talked to Brian about how this all started and to
                find out where they are now and how they are getting along.
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan pt-0">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}
      <section className="section inn-page">
        <div className="container">
          <div className="row">
            <div className="left-side col-xs-12 col-sm-9 col-md-9">
              <div className="row share-bread">
                <div className="bread-box col-md-8">
                  <Breadcrumb title="Our Rj's" />
                </div>
                <div className="sharebox col-md-4">
                  <div className="share-boxes">
                    <div className="sharethis-inline-share-buttons"></div>
                  </div>
                </div>
              </div>

              {/* <!--<page-box>--> */}
              <div className="show-box darkpage-bg">
                <div className="row">
                  <div className="col-sm-12 col-md-12 more-inn-section full-podcast-list full-video-list full-news-list news-big-list">
                    <div className="services-box row full-sector full-team">
                      <Item
                        url={`/rjDetail`}
                        title="Samita Rajbhandari"
                        image={Rj1}
                      />
                      <Item
                        url={`/rjDetail`}
                        title="Hemanta Kumar Subedi"
                        image={Rj2}
                      />
                      <Item
                        url={`/rjDetail`}
                        title="Parbati Lama"
                        image={Rj3}
                      />
                      <Item
                        url={`/rjDetail`}
                        title="Rupendra K. Shrestha"
                        image={Rj4}
                      />
                    </div>
                    {/* <!--<pagination>--> */}
                    <Pagination />
                  </div>
                </div>
              </div>
              {/* <!--</page-box>--> */}
            </div>
            {/* <!--<right side>--> */}
            <div className="right-side co-sm-3 col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Item = ({ url, title, image }) => {
  return (
    <div
      className="team-item col-sm-6 col-md-6 wow fadeInUp"
      data-wow-delay="0.5s"
    >
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
          <span className="main-title">
            {title}
            <span className="designation">More Info</span>
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default Rjs;
