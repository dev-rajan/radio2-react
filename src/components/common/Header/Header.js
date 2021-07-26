import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social";
import Navigation from "./Navigation";
import Logo from "../../../assets/images/logo.png";
import SearchForm from "../SearchForm";

const Header = () => {
  return (
    <>
      <div id="sticky" className="header">
        <div className="container-fluid headbox">
          <div className="row headerbox ">
            <div className="logo-box col-sm-3 col-md-2">
              <div className="logo-item">
                <Link to="/" title="Logo">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <a
                className="search-btn btn-search"
                href="javascript:void(0)"
                title="Search"
              >
                <span className="search-icon fa fa-search"></span>
              </a>
            </div>
            <div className="navigation-box col-sm-6 col-md-8">
              <Navigation />
            </div>
            <div className="navigation-box col-sm-3 col-md-2">
              <div className="nav-box">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--<search option>--> */}
      <div className="search-panel">
        <span className="menu-close">
          <span className="left-icon lnr lnr-cross"></span>
        </span>
        <div className="search-box">
          <div className="search-form">
            <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
