import React from "react";
import RightArtist from "./RightArtist";
import RightCharts from "./RightCharts";
import RightPhotos from "./RightPhotos";
import RightProgram from "./RightProgram";
import RightRj from "./RightRj";
import RightVideos from "./RightVideos";
import RightWhatsOn from "./RightWhatsOn";

const Sidebar = () => {
  return (
    <>
      <RightWhatsOn />
      <RightArtist />
      <RightCharts />
      <RightPhotos />
      <RightProgram />
      <RightVideos />
      <RightRj />
    </>
  );
};

export default Sidebar;
