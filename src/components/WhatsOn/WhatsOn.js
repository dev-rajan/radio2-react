import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Pagination from "../common/Pagination";
import { Link } from "react-router-dom";
import Artist1 from "../../assets/images/pro01.jpg";
import Artist2 from "../../assets/images/pro02.jpg";
import Artist3 from "../../assets/images/pro03.jpg";
import Artist4 from "../../assets/images/pro04.jpg";

const WhatsOn = () => {
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
                  <Breadcrumb title="What's On" />
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
                    <div className="row">
                      {/* <!--<latest photo>--> */}
                      <ItemBig
                        url={`/whatsOnDetail`}
                        title="Changa Festival at Club Himalaya Nagarkot"
                        image={Artist1}
                        date="Jan 28, 2019"
                      />
                      <ItemSmall
                        url={`/whatsOnDetail`}
                        title="Simply the lorem Ipsum is simply dummy text of
                        the printing typeset."
                        image={Artist2}
                        date="Jan 28, 2019"
                      />
                      <ItemSmall
                        url={`/whatsOnDetail`}
                        title="Lorem lipsum dollar set simply the dummy text
                        of the printing typeset."
                        image={Artist3}
                        date="Jan 28, 2019"
                      />
                      <ItemSmall
                        url={`/whatsOnDetail`}
                        title="The best thig is the best is simply dummy text
                        of the printing typeset."
                        image={Artist4}
                        date="Jan 28, 2019"
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

const ItemBig = ({ url, title, image, date }) => {
  return (
    <div
      className={`items latest-video latest-newsfeed col-sm-12 col-md-12`}
      data-wow-delay="0.5s"
    >
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />

          <span className="img-overlay">
            <span className="main-title">{title}</span>
            <span className="description">{date}</span>
            <span className="more-btn">Read More</span>
          </span>
        </figure>
      </Link>
    </div>
  );
};

const ItemSmall = ({ url, title, image, date }) => {
  return (
    <div className="items col-sm-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
      <Link to={url} title={title}>
        <span className="media">
          <figure className="mr-4">
            <span className="img-box">
              <img src={image} alt={title} />
            </span>
          </figure>
          <span className="media-body">
            <span className="back-drop">
              <span className="dates">{date}</span>
              <span className="main-title">{title}</span>
              <span className="more-btn">Read More</span>
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default WhatsOn;
