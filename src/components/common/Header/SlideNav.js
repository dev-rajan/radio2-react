import React from "react";
import { Link } from "react-router-dom";

const SlideNav = () => {
  return (
    <ul className="slide-nav">
      <Item url={`/home`} title="Advertisement Tariff" />
      <Item url={`/#!`} title="Terms &amp; Conditions" />
      <Item url={`/news`} title="Privacy Policy" />
    </ul>
  );
};

const Item = ({ url, title }) => {
  return (
    <li>
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

export default SlideNav;
