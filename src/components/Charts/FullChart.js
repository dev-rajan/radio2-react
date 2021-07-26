import React from "react";

const FullChart = () => {
  return (
    <>
      <h1 className="chart-title">Music Express</h1>
      <h2 className="update-date">Updated on: Jan 2, 2019</h2>
      {/* // <!--<chart list>--> */}
      <Item
        title="Parkha Parkha Mayalu"
        album="Mangalam"
        num="1"
        moveClass="non-mover"
        sortClass="icon-sort"
      />
      <Item
        title="Yati Yeti Pani Ganga Rani"
        album="Kri"
        num="2"
        moveClass="move-up"
      />
      <Item
        title="Rupai Mohani Naran"
        album="Shatru Gate"
        num="3"
        moveClass="move-up"
      />
      <Item
        title="Visit Visa Ma"
        album="Dal Bhat Tarkari"
        num="4"
        moveClass="move-up"
      />
      <Item
        title="Galbandi Chyatiyo Timle Tanera"
        album="Prakash Sapoot"
        num="5"
        moveClass="move-up"
      />
      <Item
        title="Maya Lai Lai Lai"
        album="Cartoonz Cruz"
        num="6"
        moveClass="move-up"
      />
      <Item
        title="Karke Najar Le Nahera"
        album="BroSis Band"
        num="7"
        moveClass="move-up"
      />
      <Item
        title="Himala Lai Dhakyo Kanchha"
        album="Swapnil Karki"
        num="8"
        moveClass="move-up"
      />
      <Item
        title="Hilo Laagla Nylon Ko Saadi Ma"
        album="Saruna Bhandari"
        num="9"
        moveClass="move-up"
      />
      <Item
        title="Dherai Din Bho Timro Jhajalko"
        album="Shatru Gate"
        num="10"
        moveClass="move-up"
      />
      {/* <!--</chart list>--> */}
    </>
  );
};

const Item = ({ title, album, num, moveClass, sortClass }) => {
  return (
    <div className="item-news media">
      <figure className="mr-3">
        <span className="number-box">
          <span className="num-title">{num}</span>
          <span className={`status ${moveClass}`}>
            <span className={`left-icon ${sortClass} fa fa-sort`}></span>
          </span>
        </span>
      </figure>
      <span className="media-body">
        <span className="main-title">{title}</span>
        <span className="song-album">{album}</span>
      </span>
    </div>
  );
};

export default FullChart;
