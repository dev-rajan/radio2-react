import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social-media">
      <SocialItem
        url={`/#!`}
        title="Facebook"
        classname="facebook"
        iconName="facebook"
      />
      <SocialItem
        url={`/#!`}
        title="Twitter"
        classname="twitter"
        iconName="twitter"
      />
      <SocialItem
        url={`/#!`}
        title="YouTube"
        classname="youtube"
        iconName="youtube-play"
      />
      <a href="javscript:void(0)" title="Search" className="btn-search">
        <span className="left-icon fa fa-search"></span>
      </a>
    </div>
  );
};

export const SocialItem = ({ url, title, classname, iconName }) => {
  return (
    <Link to={url} title={title} target="_blank" className={classname}>
      <span className={`left-icon fa fa-${iconName}`}></span>
    </Link>
  );
};

export default Social;
