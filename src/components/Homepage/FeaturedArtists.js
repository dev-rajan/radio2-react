import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Artist1 from "../../assets/images/artist01.jpg";
import Artist2 from "../../assets/images/artist02.jpg";
import Artist3 from "../../assets/images/artist03.jpg";
import Artist4 from "../../assets/images/artist04.jpg";

const FeaturedArtists = () => {
  const options = {
    items: 4,
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
    dots: false,
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
        items: 4,
      },
    },
    navText: [
      '<i class="lnr lnr-arrow-left"></i>',
      '<i class="lnr lnr-arrow-right"></i>',
    ],
  };
  return (
    <section className="section home-about featured-artists">
      <div className="container">
        <div className="row welcome-box wow fadeInUp" data-wow-delay="0.5s">
          <div className="title-item col-sm-12 col-md-12">
            <h1 className="section-title">
              Featured <span className="red-text">Artists</span>
              <span className="more-link">
                <Link
                  to={`/featuredArtist`}
                  title="Read More"
                  className="more-btns"
                >
                  View More
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
            <div className="featured">
              <OwlCarousel className="d-nav" {...options}>
                <ArtistFeatured />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedItem = ({ url, name, image, desc }) => {
  return (
    <div className="items">
      <Link to={url} title={name}>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <span className="main-title">{name}</span>
        <span className="description">{desc}</span>
        <span className="more-btn">More</span>
      </Link>
    </div>
  );
};

export const ArtistFeatured = () => {
  return (
    <>
      <FeaturedItem
        url={`/#!`}
        name="Rojina Thapaliya"
        image={Artist1}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
      <FeaturedItem
        url={`/#!`}
        name="Manish Shrestha"
        image={Artist2}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
      <FeaturedItem
        url={`/#!`}
        name="Parbati Pokharel"
        image={Artist3}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
      <FeaturedItem
        url={`/#!`}
        name="Bhimsen Dash"
        image={Artist4}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
    </>
  );
};

export default FeaturedArtists;
