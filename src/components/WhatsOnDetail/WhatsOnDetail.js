import React from "react";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import Bigyapan from "../common/Ads/Bigyapan";
import Sidebar from "../common/Sidebar/Sidebar";
import Artist1 from "../../assets/images/pro01.jpg";
import Artist2 from "../../assets/images/pro02.jpg";
import Artist3 from "../../assets/images/pro03.jpg";
import { Link } from "react-router-dom";

const WhatsOnDetail = () => {
  return (
    <div className="inner-page">
      <div className="page-title-big">
        <div className="container">
          <div className="row">
            <div className="page-titles col-xs-12 col-sm-12 col-md-12">
              <h1 className="page-title">
                Changa Festival at Club Himalaya Nagarkot
              </h1>
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
                    category="What's On"
                    title="Changa Festival at Club Himalaya Nagarkot"
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
                  {/* <!--<right-content>--> */}
                  <div className="right-content col-md-12">
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
                    <h1 className="sections-title">More</h1>
                    <div className="row">
                      <MoreNews
                        url={`/whatsOnDetail`}
                        title="Saathi Sanga Man Ka Kura"
                        date="Jan 28, 2019"
                        image={Artist1}
                      />
                      <MoreNews
                        url={`/whatsOnDetail`}
                        title="Century Masala No Tenson"
                        date="Jan 28, 2019"
                        image={Artist2}
                      />
                      <MoreNews
                        url={`/whatsOnDetail`}
                        title="Yo Maya Bhanne Chij Yastai Ho"
                        date="Jan 28, 2019"
                        image={Artist3}
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

const Description = () => {
  return (
    <>
      <div className="featured-images">
        <img src="https://picsum.photos/200/300" alt="" />
        {/* <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/UEbVXyH1adI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
      </div>
      <p>
        <span className="drop-cap">M</span>
        onopoly is the best dummy text oreign Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry???s
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

export const MoreNews = ({ url, title, date, image }) => {
  return (
    <div className="items col-sm-4 col-md-4">
      <Link to={url} title={title}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span className="main-title">{title}</span>
        <span className="description">{date}</span>
        <span className="more-btn">Read More</span>
      </Link>
    </div>
  );
};

export default WhatsOnDetail;
