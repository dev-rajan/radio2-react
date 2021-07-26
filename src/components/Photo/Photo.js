import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Pagination from "../common/Pagination";
import Artist1 from "../../assets/images/pro01.jpg";
import Artist2 from "../../assets/images/pro02.jpg";
import Artist3 from "../../assets/images/pro03.jpg";
import Artist4 from "../../assets/images/pro04.jpg";
import { Link } from "react-router-dom";

const Photo = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Photos</h1>
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
                  <Breadcrumb title="Photos" />
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
                  <div className="col-sm-12 col-md-12 more-inn-section full-podcast-list full-video-list">
                    <div className="row">
                      {/* <!--<latest photo>--> */}
                      <Item
                        url={`/photoDetail`}
                        title="Changa Festival at Club Himalaya Nagarkot"
                        image={Artist1}
                        num="20"
                        extraClass="latest-video"
                        width="12"
                      />
                      <Item
                        url={`/photoDetail`}
                        title="Saathi Sanga Man Ka Kura"
                        image={Artist2}
                        num="8"
                        width="4"
                      />
                      <Item
                        url={`/photoDetail`}
                        title="Century Masala No Tenson"
                        image={Artist3}
                        num="14"
                        width="4"
                      />
                      <Item
                        url={`/photoDetail`}
                        title="Yo Maya Bhanne Chij Yastai Ho"
                        image={Artist4}
                        num="5"
                        width="4"
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

const Item = ({ url, extraClass, width, title, image, num }) => {
  return (
    <div className={`items ${extraClass} col-sm-${width} col-md-${width}`}>
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />

          <span className="img-overlay">
            <span className="main-title">{title}</span>
            <span className="description">{num} Images</span>
            <span className="more-btn">View Photos</span>
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default Photo;
