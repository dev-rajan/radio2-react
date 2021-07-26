import React from "react";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Artist1 from "../../assets/images/pro01.jpg";
import Artist2 from "../../assets/images/pro02.jpg";
import Artist3 from "../../assets/images/pro03.jpg";
import { Link } from "react-router-dom";

const ProgramDetail = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">Yo Maya Bhanne Chij Yastai Ho</h1>
              <h2 className="description">
                Asia at Sea talked to Brian about how this all started and to
                find out where they are now and how they are getting along.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan pt-0">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}
      <section className="section inn-page">
        <div className="container">
          <div className="row">
            <div className="left-side col-xs-12 col-sm-9 col-md-9">
              <div className="row share-bread">
                <div className="bread-box col-md-8">
                  <Breadcrumb
                    category="Shows"
                    title="Yo Maya Bhanne Chij Yastai Ho"
                  />
                </div>
                <div className="sharebox col-md-4">
                  <div className="share-boxes">
                    <div className="sharethis-inline-share-buttons"></div>
                  </div>
                </div>
              </div>

              {/* <!--<page-box>--> */}
              <div className="show-box darkpage-bg">
                <div className="row">
                  {/* <!--<sidebar>--> */}
                  <div className="left-content col-md-3">
                    <div className="item-left">
                      <figure>
                        <img src={Artist1} alt="" />
                      </figure>
                      <span className="time-box">
                        <span className="on-air">On Air</span>
                        <span className="start-time">2:00 PM - 3:00 PM</span>
                      </span>
                    </div>

                    <div className="item-left">
                      <h1 className="item-title">Everyday</h1>
                      <ul className="item-list">
                        <ProgramTime startTime="6:00 AM" endTime="7:00 AM" />
                        <ProgramTime startTime="7:00 AM" endTime="8:00 AM" />
                        <ProgramTime startTime="8:00 AM" endTime="9:00 AM" />
                      </ul>
                    </div>

                    <div className="item-left">
                      <h1 className="item-title">Radio Presenters</h1>
                      <ul className="item-list presenter-list">
                        <RJ url={`/rjs`} title="Darshan Niraula" />
                        <RJ url={`/rjs`} title="Bhumi Kanta Aryal" />
                        <RJ url={`/rjs`} title="Bisnu Rimal" />
                        <RJ url={`/rjs`} title="Srijana Koirala" />
                      </ul>
                    </div>

                    <div className="item-left">
                      <h1 className="item-title">Social Media</h1>
                      <ul className="item-list social-media-list">
                        <SocialItem
                          url={`/#!`}
                          title="Facebook"
                          classname="facebook"
                          iconName="facebook"
                        />
                        <SocialItem
                          url={`/#!`}
                          title="Twitter"
                          classname="twitter"
                          iconName="twitter"
                        />
                        <SocialItem
                          url={`/#!`}
                          title="YouTube"
                          classname="youtube"
                          iconName="youtube-play"
                        />
                      </ul>
                    </div>
                  </div>
                  {/* <!--</sidebar>--> */}

                  {/* <!--<right-content>--> */}
                  <div className="right-content col-md-9">
                    <h1 className="content-title">Programme Info</h1>
                    <div className="editor-box">
                      <Description />
                    </div>

                    <div className="section inn-section">
                      <h1 className="sections-title">Post Comments</h1>
                      Your facebook comment box goes here.
                    </div>
                  </div>
                  {/* <!--</right-content>--> */}

                  <div className="col-sm-12 col-md-12 more-inn-section">
                    <h1 className="sections-title">More Programmes</h1>
                    <div className="row">
                      <Item
                        url={`/programDetail`}
                        title="Saathi Sanga Man Ka Kura"
                        image={Artist1}
                        desc="A Compete Health Programme."
                      />
                      <Item
                        url={`/programDetail`}
                        title="Century Masala No Tenson"
                        image={Artist2}
                        desc="Full Comedy Show"
                      />
                      <Item
                        url={`/programDetail`}
                        title="Yo Maya Bhanne Chij Yastai Ho"
                        image={Artist3}
                        desc="Love or Hate with you."
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--</page-box>--> */}
            </div>
            {/* <!--<right side>--> */}
            <div className="right-side co-sm-3 col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProgramTime = ({ startTime, endTime }) => {
  return (
    <li>
      <span className="time-entry">
        {startTime} - {endTime}
      </span>
    </li>
  );
};

const RJ = ({ url, title }) => {
  return (
    <li>
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

const Description = () => {
  return (
    <>
      <p>
        <span className="drop-cap">M</span>
        onopoly is the best dummy text oreign Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry’s
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries
      </p>

      <p>
        Nemo enim ipsam voluptatem quia <strong>voluptas</strong> sit aspernatur
        aut odit aut fugit, sed quia consequuntur ma doling tresniu eos qui
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia doloren sit amet, consecto adipisci elit, sed quia non
        numquam labore et dolore magnam. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, <em>sed do eiusmod tempor incididunt</em> ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non lore proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum sed ut
        perspiciatis.
      </p>
      <blockquote>
        This is the ultimate product of the dummy text for web world that has
        been inventend in the Saudi Arabia
      </blockquote>

      <p>
        Nemo enim ipsam{" "}
        <a href="#" title="">
          voluptatem quia voluptas sit aspernatur
        </a>
        aut odit aut fugit, sed quia consequuntur ma doling tresniu eos qui
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia doloren sit amet, consecto adipisci elit, sed quia non
        numquam labore et dolore magnam. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor
        <u>incididunt ut labore et dolore magna</u> aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non lore proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum sed ut perspiciatis.
      </p>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur ma doling tresniu eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia doloren sit amet, consecto adipisci elit, sed quia non numquam
        labore et dolore magnam.
      </p>
    </>
  );
};

const Item = ({ url, title, image, desc }) => {
  return (
    <div className="items col-sm-4 col-md-4">
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

export const SocialItem = ({ url, title, classname, iconName }) => {
  return (
    <Link to={url} title={title} target="_blank" className={classname}>
      <span className={`left-icon fa fa-${iconName}`}></span>
    </Link>
  );
};

export default ProgramDetail;
