import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";

const Podcast = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Podcast</h1>
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
                    category="Podcast"
                    title="Yo Maya Bhanne Chij Yastai Ho"
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
                  <div className="col-sm-12 col-md-12 more-inn-section full-podcast-list">
                    <div className="row">
                      <Items
                        url={`/podcastDetail`}
                        image={`http://127.0.0.1:8000/images/pro01.jpg`}
                        title="Saathi Sanga Man Ka Kura"
                        desc="A Complete Health Programme."
                      />
                      <Items
                        url={`/podcastDetail`}
                        image={`http://127.0.0.1:8000/images/pro02.jpg`}
                        title="Century Masala No Tenson"
                        desc="Full Comedy Show"
                      />
                      <Items
                        url={`/podcastDetail`}
                        image={`http://127.0.0.1:8000/images/pro03.jpg`}
                        title="Yo Maya Bhanne Chij Yastai Ho"
                        desc="Love or Hate with you."
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

const Items = ({ url, title, image, desc }) => {
  return (
    <div className="items col-sm-4 col-md-4">
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span className="main-title">{title}</span>
        <span className="description">{desc}</span>
        <span className="more-btn">Listen Now</span>
      </Link>
    </div>
  );
};

export default Podcast;
