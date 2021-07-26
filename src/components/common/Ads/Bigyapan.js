import React from "react";
import Ad from "../../../assets/images/top-right-ad.jpg";

const Bigyapan = () => {
  return (
    <div className="container bigyaapan-box">
      <div className="row bigyapan-box">
        <FullAd url={`/#!`} title="Advertisement" image={Ad} />
        <FullAd url={`/#!`} title="Advertisement" image={Ad} />
      </div>
    </div>
  );
};

const FullAd = ({ url, title, image }) => {
  return (
    <div className="bigyapan-item col-sm-6 col-md-6">
      <a href={url} target="_blank" title={title}>
        <img src={image} alt={title} />
      </a>
    </div>
  );
};

export default Bigyapan;
