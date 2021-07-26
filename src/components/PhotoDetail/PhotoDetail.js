import React from "react";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";

const PhotoDetail = () => {
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
                  <Breadcrumb title="Photo" />
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
                  <div className="col-sm-12 col-md-12 more-inn-section full-podcast-list full-video-list full-thumb-list">
                    <div id="photo-gallery" className="row">
                      <Pic
                        image={`https://picsum.photos/960/500`}
                        caption="This is image 1 caption"
                      />
                      <Pic
                        image={`https://picsum.photos/300/300`}
                        caption="This is image 2 caption"
                      />
                      <Pic
                        image={`https://picsum.photos/960/500`}
                        caption="This is image 3 caption"
                      />
                    </div>
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

const Pic = ({ image, caption }) => {
  return (
    <div
      className="items col-sm-4 col-md-4"
      data-src={image}
      data-sub-html={caption}
    >
      <a href="#">
        <figure>
          <img className="img-responsive" src={image} />
          <span className="play-btn fa fa-search"></span>
        </figure>
      </a>
    </div>
  );
};

export default PhotoDetail;
