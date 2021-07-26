import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="pagination wow fadeInUp" data-wow-delay="0.5s">
      <span className="current">1</span>
      <Page url={`/#`} pageClass="page larger" num="2" />
      <Page url={`/#`} pageClass="page larger" num="3" />
      <Page url={`/#`} pageClass="nextpostslink" num="Next" />
    </div>
  );
};

const Page = ({ url, pageClass, num }) => {
  return (
    <Link className={pageClass} to={url}>
      {num}
    </Link>
  );
};

export default Pagination;
