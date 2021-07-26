import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slide1 from "../../assets/images/slide001.jpg";
import Slide2 from "../../assets/images/slide002.jpg";
import Slide3 from "../../assets/images/slide003.jpg";

const HomeSlider = () => {
  const options = {
    items: 1,
    loop: true,
    rewind: true,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    singleItem: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    responsiveClass: true,
    nav: false,
    dots: true,
  };
  return (
    <>
      <section className="section home-slide">
        <div className="slide-box">
          <div id="home-slides">
            <OwlCarousel {...options}>
              <SlideItem
                url={`/#!`}
                title="Music can change your"
                coloredTitle="mind"
                image={Slide1}
                desc="Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since"
              />
              <SlideItem
                url={`/#!`}
                title="Bring music to"
                coloredTitle="life"
                image={Slide2}
                desc="Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since"
              />
              <SlideItem
                url={`/#!`}
                title="Let the music"
                coloredTitle="speak"
                image={Slide3}
                desc="Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since"
              />
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

const SlideItem = ({ url, title, image, desc, coloredTitle }) => {
  return (
    <div className="item">
      <Link to={url} title={title}>
        <img src={image} alt={title} />
        <span className="captionbox">
          <span className="container">
            <div className="overlays-box">
              <span className="maintitle">
                {title} <strong>{coloredTitle}</strong>
                <span className="description">{desc}</span>
                <span className="more-link">Read More</span>
              </span>
            </div>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default HomeSlider;
