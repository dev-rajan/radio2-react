import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, category }) => {
  return (
    <ul className="breadcrumbs">
      <li className="first">
        <Link to={`/`} title={title}>
          Home
        </Link>
      </li>
      {category ? (
        <li className="first">
          <Link to={`/#!`} title={category}>
            {category}
          </Link>
        </li>
      ) : null}
      <li className="active">{title}</li>
    </ul>
  );
};

export default Breadcrumb;
