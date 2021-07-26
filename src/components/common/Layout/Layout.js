import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Header/Navigation";
import LivePlayer from "../LivePlayer/LivePlayer";
import SlideNav from "../Header/SlideNav";
import PopupNotice from "../PopupNotice/PopupNotice";
import Social from "../Social";
import jQuery from "jquery";

const Layout = ({ children }) => {
  useEffect(() => {
    jQuery(".scrollToTop").click(function (e) {
      "use strict";
      jQuery("html,body").animate(
        {
          scrollTop: 0,
        },
        "slow"
      );
      e.preventDefault();
      return false;
    });
  }, []);
  return (
    <>
      <LivePlayer />
      {/* <PopupNotice /> */}
      {/* Mobile Menu */}
      <span className="menu-toggle">
        <span className="left-icon lnr lnr-menu"></span>
      </span>
      {/* Mobile Nav */}
      <div className="primary-panel">
        <div className="close-box">
          <span className="main-title">
            <span className="menu-close">
              <span className="left-icon lnr lnr-cross"></span>
            </span>
          </span>
        </div>
        <div className="menu-box">
          <Navigation />
          <SlideNav />
          <Social />
        </div>
      </div>
      <div id="wrapper" className="wrapper">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
      <div className="upToScroll">
        <a href="javascript:void(0)" className="scrollToTop">
          <i className="lnr lnr-chevron-up"></i>
        </a>
      </div>
      <div className="mask-box"></div>
    </>
  );
};

export default Layout;
