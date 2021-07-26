import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Pagination from "../common/Pagination";
import { Link } from "react-router-dom";
import Artist1 from "../../assets/images/artist01.jpg";
import Artist2 from "../../assets/images/artist02.jpg";
import Artist3 from "../../assets/images/artist03.jpg";
import Artist4 from "../../assets/images/artist04.jpg";

const FeaturedArtist = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Featured Artists</h1>
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
                  <Breadcrumb
                    category="Featured Aritsts"
                    title="Nabin K. Bhattarai"
                  />
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
                  <div className="col-sm-12 col-md-12 featured-artists-list">
                    <div className="row">
                      <Artist
                        url={`/#!`}
                        title="Rojina Thapaliya"
                        image={Artist1}
                        desc="Lorem lipsum dollar set is the dummy text for web
                            world."
                      />
                      <Artist
                        url={`/#!`}
                        title="Manish Shrestha"
                        image={Artist2}
                        desc="Lorem lipsum dollar set is the dummy text for web
                            world."
                      />
                      <Artist
                        url={`/#!`}
                        title="Parbati Pokharel"
                        image={Artist3}
                        desc="Lorem lipsum dollar set is the dummy text for web
                            world."
                      />
                      <Artist
                        url={`/#!`}
                        title="Bhimsen Dash"
                        image={Artist4}
                        desc="Lorem lipsum dollar set is the dummy text for web
                            world."
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

const Artist = ({ url, title, desc, image }) => {
  return (
    <div className="items col-sm-6 col-md-4">
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span className="main-title">{title}</span>
        <span className="description">{desc}</span>
        <span className="more-btn">More</span>
      </Link>
    </div>
  );
};

export default FeaturedArtist;
