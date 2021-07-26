import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation_box mains">
      <ul>
        <NavItem url={`/about`} title="About" />
        <NavItem url={`/shows`} className="selected" title="Shows" />
        <NavItem url={`/podcast`} title="Podcast" />
        <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            title="Gallery"
          >
            Charts
          </a>
          <ul className="dropdown-menu">
            <DropItem url={`/charts`} title="Music Express" />
            <DropItem url={`/charts`} title="Pop Music" />
            <DropItem url={`/charts`} title="Lok Music" />
          </ul>
        </li>
        <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            title="Gallery"
          >
            Gallery
          </a>
          <ul className="dropdown-menu">
            <DropItem url={`/photos`} title="Photos" />
            <DropItem url={`/videos`} title="Videos" />
          </ul>
        </li>
        <NavItem url={`/whatsOn`} title="What's On" />
        <NavItem url={`/rjs`} title="RJs" />
        <li className="live-btn">
          <Link to={`/live`} title="Listen Live">
            <span className="listen">Listen</span>
            <span className="live-text">Live</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const NavItem = ({ url, className, title }) => {
  return (
    <li>
      <Link className={className} to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

const DropItem = ({ url, title }) => {
  return (
    <li>
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

export default Navigation;
