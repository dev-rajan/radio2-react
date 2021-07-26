import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Rj1 from "../../assets/images/rj01.jpg";
import Rj2 from "../../assets/images/rj02.jpg";
import Rj3 from "../../assets/images/rj03.jpg";
import Rj4 from "../../assets/images/rj04.jpg";
import Rj5 from "../../assets/images/rj05.jpg";
import Rj6 from "../../assets/images/rj06.jpg";

const HomeRjs = () => {
  const options = {
    items: 6,
    loop: true,
    rewind: true,
    autoplay: true,
    margin: 30,
    //animateOut: 'fadeOut',
    autoplayHoverPause: false,
    singleItem: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    nav: true,
    //navSpeed: 500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 6,
      },
    },
    navText: [
      '<i class="lnr lnr-arrow-left"></i>',
      '<i class="lnr lnr-arrow-right"></i>',
    ],
  };
  return (
    <section className="section home-about featured-artists rjs">
      <div className="container">
        <div className="row welcome-box wow fadeInUp" data-wow-delay="0.5s">
          <div className="title-item col-sm-12 col-md-12">
            <h1 className="section-title">
              Our <span className="red-text">RJs</span>
              <span className="more-link">
                <Link to={`/rjs`} title="Read More" className="more-btns">
                  View More{" "}
                  <span className="right-icon lnr lnr-arrow-right"></span>
                </Link>
              </span>
            </h1>
            <span className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </span>
          </div>

          <div className="artists-box col-sm-12 col-md-12">
            <div className="rjs">
              <OwlCarousel className="d-nav" {...options}>
                <RjHome />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeRj = ({ url, title, image, rj }) => {
  return (
    <div className="items">
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span className="main-title">{rj}</span>
        <span className="description">{title}</span>
        <span className="more-btn">More</span>
      </Link>
    </div>
  );
};

export const RjHome = () => {
  return (
    <>
      <HomeRj
        url={`/rjs`}
        rj="Rajendra Thapaliya"
        title="Saathi Sanga Man Ka Kura"
        image={Rj1}
      />
      <HomeRj
        url={`/rjs`}
        rj="Himal Kiran Rai"
        title="Century Masala Top Ten"
        image={Rj2}
      />
      <HomeRj
        url={`/rjs`}
        rj="Sugam Pokharel"
        title="Swasthya Sarokar"
        image={Rj3}
      />
      <HomeRj
        url={`/rjs`}
        rj="Nabin Munakarmi"
        title="Swastika Raut"
        image={Rj4}
      />
      <HomeRj
        url={`/rjs`}
        rj="Nabin Munakarmi"
        title="Swastika Raut"
        image={Rj5}
      />
      <HomeRj
        url={`/rjs`}
        rj="Nabin Munakarmi"
        title="Swastika Raut"
        image={Rj6}
      />
    </>
  );
};

export default HomeRjs;
