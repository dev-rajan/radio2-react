import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Pagination from "../common/Pagination";
import Team1 from "../../assets/images/team-01.jpg";
import Team2 from "../../assets/images/team-02.jpg";
import Team3 from "../../assets/images/team-03.jpg";
import Team4 from "../../assets/images/team-04.jpg";

const Team = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Our Team</h1>
              <Breadcrumb title="Team" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="left-side no-share col-xs-12 col-sm-12 col-md-12">
            <div className="services-box row full-sector full-team">
              <Members
                url={`/team-detail`}
                title="Tilak Kumar Malla"
                image={Team1}
                designation="Senior Lawyer"
              />
              <Members
                url={`/team-detail`}
                title="Sumnima Rai"
                image={Team2}
                designation="Senior Lawyer"
              />
              <Members
                url={`/team-detail`}
                title="Parbati Lama"
                image={Team3}
                designation="Assistant Lawyer"
              />
              <Members
                url={`/team-detail`}
                title="Rupendra K. Shrestha"
                image={Team4}
                designation="Senior Lawyer"
              />
            </div>

            {/* <!--<pagination>--> */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

const Members = ({ url, title, image, designation }) => {
  return (
    <div
      className="team-item col-sm-4 col-md-3 wow fadeInUp"
      data-wow-delay="0.5s"
    >
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
          <span className="main-title">
            {title}
            <span className="designation">{designation}</span>
            <span className="read-more">Read More</span>
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default Team;
