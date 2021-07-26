import React from "react";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const Search = ({ keyword = "Kathmandu" }) => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Search</h1>
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
                  <Breadcrumb title="Search" />
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
                  {/* <!--<right-content>--> */}
                  <div className="right-content col-md-12">
                    <div className="full-service-list full-search-list">
                      <div className="search-title">
                        <h2>
                          Search results for:
                          <span className="search_word">"{keyword}"</span>
                        </h2>
                      </div>

                      <Item
                        url={`/news`}
                        title="Lorem Ipsum is simply Kathmandu text of the printing
                            typeset. (Open)"
                        desc="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the ..."
                      />
                      <Item
                        url={`/news`}
                        title="Lorem Ipsum is simply Kathmandu text of the printing
                            typeset. (Open)"
                        desc="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the ..."
                      />
                      <Item
                        url={`/news`}
                        title="Lorem Ipsum is simply Kathmandu text of the printing
                            typeset. (Open)"
                        desc="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the ..."
                      />
                      <Item
                        url={`/news`}
                        title="Lorem Ipsum is simply Kathmandu text of the printing
                            typeset. (Open)"
                        desc="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the ..."
                      />
                      <Item
                        url={`/news`}
                        title="Lorem Ipsum is simply Kathmandu text of the printing
                            typeset. (Open)"
                        desc="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the ..."
                      />
                    </div>
                  </div>
                  {/* <!--</right-content>--> */}
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

const Item = ({ url, title, desc }) => {
  return (
    <div className="items">
      <Link to={url}>
        <span className="main-title">{title}</span>
        <span className="description">{desc}</span>
      </Link>
    </div>
  );
};

export default Search;
