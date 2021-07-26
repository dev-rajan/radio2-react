import React from "react";
import HomeSlider from "../components/Homepage/HomeSlider";
import Bigyapan from "../components/common/Ads/Bigyapan";
import FeaturedArtists from "../components/Homepage/FeaturedArtists";
import ChartsHome from "../components/Homepage/ChartsHome";
import FeaturedProgram from "../components/Homepage/FeaturedProgram";
import WhatsOnHome from "../components/Homepage/WhatsOnHome";
import HomeRjs from "../components/Homepage/HomeRjs";
import LatestPhotos from "../components/Homepage/LatestPhotos";
import LatestVideos from "../components/Homepage/LatestVideos";

const Home = () => {
  return (
    <>
      <HomeSlider />

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}

      {/* <!--<featured artists>--> */}
      <FeaturedArtists />

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}

      {/* <!--<featured artists>--> */}
      <ChartsHome />

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}

      {/* <!--<featured programmes>--> */}
      <FeaturedProgram />

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}

      {/* <!--<whats on>--> */}
      <WhatsOnHome />

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}

      {/* <!--<latest videos>--> */}
      <LatestVideos />

      {/* <!--<bigyaapan full>--> */}
      <section className="section full-bigyapan">
        <Bigyapan />
      </section>
      {/* <!--</bigyaapan full>--> */}

      {/* <!--<photos>--> */}
      <LatestPhotos />

      {/* <!--<rjs>--> */}
      <HomeRjs />
    </>
  );
};

export default Home;
