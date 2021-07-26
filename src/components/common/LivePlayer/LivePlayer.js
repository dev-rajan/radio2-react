import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../../../assets/images/pro01.jpg";
import pro2 from "../../../assets/images/pro02.jpg";

const LivePlayer = () => {
  return (
    <>
      <div className="live-player-box">
        <div className="live-player">
          <div className="row live-now live-fixed">
            <span className="close-new-btn">
              <span className="left-icon lnr lnr-chevron-down"></span>
            </span>
            <LiveMusic
              url="/programDetail"
              title="Saathi Sanga Man Ka Kura"
              image={pro1}
              statusClass="on-air"
              status="On Air"
              startTime="2:00 pm"
              endTime="3:00 pm"
            />
            <LiveMusic
              url="/programDetail"
              title="Century Masala Filmy Guff"
              image={pro2}
              statusClass="live-small"
              status="Up Next"
              startTime="3:00 pm"
              endTime="4:00 pm"
            />

            <div className="item-news player-box col-md-4 col-lg-6">
              {/* <!--<radio player>--> */}
              <div className="playerbox">
                <div className="player player-cover">
                  <audio
                    id="player2"
                    preload="true"
                    src="http://kalika-stream.softnep.com:7740/;stream.nsv&type=mp3&volume=60"
                    className="w-100"
                  />
                </div>
              </div>
              {/* <!--</radio player>--> */}
              <span className="streaming-title">
                Live streaming is powered by:
                <a
                  href=" https://www.softnep.com"
                  target="_blank"
                  title="SoftNEP"
                >
                  SoftNEP
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LiveMusic = ({
  url,
  title,
  image,
  statusClass,
  status,
  startTime,
  endTime,
}) => {
  return (
    <div className="item-news on-air-now col-md-4 col-lg-3">
      <Link to={url} title={title}>
        <figure className="mr-3">
          <img src={image} alt={title} />
        </figure>
        <div className="main-body">
          <span className="time-box">
            <span class={statusClass}>{status}</span>
          </span>
          <span className="main-title">{title}</span>
          <span className="start-time">
            {startTime} - {endTime}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default LivePlayer;
