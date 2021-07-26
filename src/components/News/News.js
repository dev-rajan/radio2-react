import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Pagination from "../common/Pagination";

const News = () => {
  return (
    <div  className="inner-page">
      <div  className="page-title-big">
        <div  className="container">
          <div  className="row">
            <div  className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1  className="page-title">News</h1>
              <Breadcrumb title="News" />
            </div>
          </div>
        </div>
      </div>

      <div  className="container">
        <div  className="row">
          <div  className="left-side col-xs-12 col-sm-12 col-md-12">
            <div  className="row full-news-list news-big-list">
              <NewsItem
                url={`/newsDetail`}
                title="Simply the lorem Ipsum is simply dummy text of the
                          printing typeset."
                image={`https://picsum.photos/800/600`}
                date="Jan 28, 2019"
              />
              <NewsItem
                url={`/newsDetail`}
                title="Lorem lipsum dollar set simply the dummy text of the
                printing typeset."
                image={`https://picsum.photos/800/600?random`}
                date="Jan 28, 2019"
              />
              <NewsItem
                url={`/newsDetail`}
                title="The best thig is the best is simply dummy text of the
                printing typeset."
                image={`https://picsum.photos/800/600`}
                date="Jan 28, 2019"
              />
              {/* <!--<pagination>--> */}
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsItem = ({ url, title, image, date }) => {
  return (
    <div  className="items col-sm-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
      <Link to={url} title={title}>
        <span  className="media">
          <figure  className="mr-4">
            <span  className="img-box">
              <img src={image} alt={title} />
            </span>
          </figure>
          <span  className="media-body">
            <span  className="back-drop">
              <span  className="dates">{date}</span>
              <span  className="main-title">{title}</span>
              <span  className="more-link">Read More</span>
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default News;
