import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div className="social-media">
      <App url={`/#!`} title="Download Android App" icon="fa-android" />
      <App url={`/#!`} title="Download iOS App" icon="fa-apple" />
    </div>
  );
};

const App = ({ url, title, icon }) => {
  return (
    <Link to={url} title={title} target="_blank">
      <span className={`left-icon fa ${icon}`}></span>
    </Link>
  );
};

export default Apps;
