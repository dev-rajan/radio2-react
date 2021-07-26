import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Artist1 from "../../assets/images/pro01.jpg";
import Artist2 from "../../assets/images/pro02.jpg";
import Artist3 from "../../assets/images/pro03.jpg";
import Android from "../../assets/images/android.png";
import Ios from "../../assets/images/ios.png";

const Live = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Live</h1>
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
                  <Breadcrumb title="Live" />
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
                  <div className="col-sm-12 col-md-12 more-inn-section">
                    <div className="row live-page">
                      <Item
                        url={`/programDetail`}
                        category="On Air Now"
                        title="Saathi Sanga Man Ka Kura"
                        image={Artist1}
                        status="On Air"
                        startTime="2:00 PM"
                        endTime="3:00 PM"
                      />
                      <Item
                        url={`/programDetail`}
                        category="Up Next"
                        title="Hamro Swasthya Sansar"
                        image={Artist2}
                        startTime="3:00 PM"
                        endTime="4:00 PM"
                      />
                      <Item
                        url={`/programDetail`}
                        category="Later On"
                        title="Log Geet Sangeet"
                        image={Artist3}
                        startTime="4:00 PM"
                        endTime="5:00 PM"
                      />

                      <div className="items download-apps col-sm-12 col-md-12">
                        <h1 className="pro-title">Download Apps</h1>
                        <a href="#" title="">
                          <img
                            src={Android}
                            alt="Android App"
                            target="_blank"
                          />
                        </a>

                        <a href="#" title="">
                          <img src={Ios} alt="iOS App" target="_blank" />
                        </a>
                      </div>
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

const Item = ({ url, category, image, title, status, startTime, endTime }) => {
  return (
    <div className="items col-sm-4 col-md-4">
      <h1 className="pro-title">{category}</h1>
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span className="main-title">{title}</span>
        <span className="time-box">
          {status ? <span className="on-air">{status}</span> : null}
          <span className="start-time">
            {startTime} - {endTime}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Live;
