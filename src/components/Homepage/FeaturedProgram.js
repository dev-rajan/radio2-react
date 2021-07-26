import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Artist1 from "../../assets/images/pro01.jpg";
import Artist2 from "../../assets/images/pro02.jpg";
import Artist3 from "../../assets/images/pro03.jpg";
import Artist4 from "../../assets/images/pro04.jpg";

const FeaturedProgram = () => {
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
    <section className="section home-about featured-artists featured-programmes">
      <div className="container">
        <div className="row welcome-box wow fadeInUp" data-wow-delay="0.5s">
          <div className="title-item col-sm-12 col-md-12">
            <h1 className="section-title">
              Featured <span className="red-text">Programmes</span>
            </h1>
            <span className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </span>
          </div>

          <div className="artists-box col-sm-12 col-md-12">
            <div className="artist">
              <OwlCarousel className="d-nav" {...options}>
                <Programs />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Program = ({ url, title, image, desc }) => {
  return (
    <div className="items">
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span className="main-title">{title}</span>
        <span className="description">{desc}</span>
        <span className="more-btn">More</span>
      </Link>
    </div>
  );
};

export const Programs = () => {
  return (
    <>
      <Program
        url={`/programDetail`}
        title="Saathi Sanga Man Ka Kura"
        image={Artist1}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
      <Program
        url={`/programDetail`}
        title="Yo Maya Bhanne Chij Yastai Ho"
        image={Artist2}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
      <Program
        url={`/programDetail`}
        title="Century Masala Pop Hits"
        image={Artist3}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
      <Program
        url={`/programDetail`}
        title="Hamro Ghar Ssnsar"
        image={Artist4}
        desc="Lorem lipsum dollar set is the dummy text for web world."
      />
    </>
  );
};

export default FeaturedProgram;
