import React from "react";
import Apps from "./Apps";

const Footer = ({ title = "SoftNEP Radio2 Design" }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <FooterItem
            icon="lnr-map-marker"
            size="4"
            title="Contact Address"
            item1="New Baneshwor, Kathmandu"
            item2="EPC 100, 8975"
          />
          <FooterItem
            icon="lnr-phone"
            size="3"
            title="Phone Number"
            item1="977 1 4115934"
            item2="977 1 00 00 00"
          />
          <FooterItem
            icon="lnr-envelope"
            size="3"
            title="Email Address"
            item1="info&#64;radio2design.com"
            item2="mkt&#64;softnep.com"
          />

          <div
            className="items col-sm-6 col-md-2 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <span className="main-title">Download Apps</span>
            <Apps />
          </div>
        </div>
      </div>

      <section className="copyright-section">
        <div className="container">
          <div className="copyrights row wow fadeInUp" data-wow-delay="0.5s">
            <div className="name-section col-sm-12 col-md-12">
              <h2>
                &copy; {title} - {new Date().getFullYear()}. All Rights
                Reserved. Site by:
                <a
                  href="https://www.softnep.com"
                  title="SoftNEP"
                  target="_blank"
                >
                  SoftNEP
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

const FooterItem = ({ icon, title, item1, item2, size }) => {
  return (
    <div
      className={`items col-sm-6 col-md-${size} wow fadeInUp`}
      data-wow-delay="0.5s"
    >
      <div className="media">
        <figure className="mr-3">
          <span className={`left-icon-big lnr ${icon}`}></span>
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
          <span className="description">
            {item1} <br />
            {item2}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
