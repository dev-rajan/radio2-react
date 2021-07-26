import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/common/Layout/Layout";

import {
  HOME,
  ABOUT,
  SHOWS,
  ERROR,
  PODCAST,
  CHARTS,
  PHOTO,
  VIDEO,
  WHATSON,
  RJS,
  LIVE,
  WHATSONDETAIL,
  NEWS,
  FEATUREDARTIST,
  TEAM,
  PHOTODETAIL,
  VIDEODETAIL,
  PODCASTDETAIL,
  PROGRAMDETAIL,
  RJDETAIL,
  SEARCH,
} from "../constants/routes";

import Home from "../pages/Home";
import Error from "../pages/404/Error";
import AboutPage from "../pages/About/AboutPage";
import ShowsPage from "../pages/Shows/ShowsPage";
import ChartsPage from "../pages/Charts/ChartsPage";
import PodcastPage from "../pages/Podcast/PodcastPage";
import PhotoPage from "../pages/Photo/PhotoPage";
import VideoPage from "../pages/Video/VideoPage";
import WhatsOnPage from "../pages/WhatsOn/WhatsOnPage";
import RjsPage from "../pages/Rjs/RjsPage";
import LivePage from "../pages/Live/LivePage";
import WhatsOnDetailPage from "../pages/WhatsOnDetail/WhatsOnDetailPage";
import FeaturedArtistPage from "../pages/FeaturedArtist/FeaturedArtistPage";
import NewsPage from "../pages/News/NewsPage";
import TeamPage from "../pages/Team/TeamPage";
import PhotoDetailPage from "../pages/PhotoDetail/PhotoDetailPage";
import VideoDetailPage from "../pages/VideoDetail/VideoDetailPage";
import PodcastDetailPage from "../pages/PodcastDetail/PodcastDetailPage";
import ProgramDetailPage from "../pages/ProgramDetail/ProgramDetailPage";
import RjDetailPage from "../pages/RjDetail/RjDetailPage";
import SearchPage from "../pages/Search/SearchPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={HOME.INDEX} exact component={Home} />
          <Route path={ABOUT.INDEX}>
            <AboutPage />
          </Route>
          <Route path={SHOWS.INDEX}>
            <ShowsPage />
          </Route>
          <Route path={PODCAST.INDEX}>
            <PodcastPage />
          </Route>
          <Route path={CHARTS.INDEX}>
            <ChartsPage />
          </Route>
          <Route path={PHOTO.INDEX}>
            <PhotoPage />
          </Route>
          <Route path={VIDEO.INDEX}>
            <VideoPage />
          </Route>
          <Route path={WHATSON.INDEX}>
            <WhatsOnPage />
          </Route>
          <Route path={RJS.INDEX}>
            <RjsPage />
          </Route>
          <Route path={LIVE.INDEX}>
            <LivePage />
          </Route>
          <Route path={WHATSONDETAIL.INDEX}>
            <WhatsOnDetailPage />
          </Route>
          <Route path={FEATUREDARTIST.INDEX}>
            <FeaturedArtistPage />
          </Route>
          <Route path={NEWS.INDEX}>
            <NewsPage />
          </Route>
          <Route path={TEAM.INDEX}>
            <TeamPage />
          </Route>
          <Route path={PHOTODETAIL.INDEX}>
            <PhotoDetailPage />
          </Route>
          <Route path={VIDEODETAIL.INDEX}>
            <VideoDetailPage />
          </Route>
          <Route path={PODCASTDETAIL.INDEX}>
            <PodcastDetailPage />
          </Route>
          <Route path={PROGRAMDETAIL.INDEX}>
            <ProgramDetailPage />
          </Route>
          <Route path={RJDETAIL.INDEX}>
            <RjDetailPage />
          </Route>
          <Route path={SEARCH.INDEX}>
            <SearchPage />
          </Route>
          <Route path={ERROR.INDEX}>
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
