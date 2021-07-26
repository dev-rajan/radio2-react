import React from "react";
import { Link } from "react-router-dom";

const ProgrammeSchedule = () => {
  return (
    <div className="special-box schedules">
      <ul className="nav nav-tabs pro-tab" id="myTab" role="tablist">
        <ScheduleDay
          status="active"
          id="sunday-tab"
          link="#sunday"
          day="hosundayme"
          value="true"
          title="Sun"
        />
        <ScheduleDay
          id="monday-tab"
          link="#monday"
          day="monday"
          value="false"
          title="Mon"
        />
        <ScheduleDay
          id="tuesday-tab"
          link="#tuesday"
          day="tuesday"
          value="false"
          title="Tue"
        />
        <ScheduleDay
          id="wednesday-tab"
          link="#wednesday"
          day="wednesday"
          value="false"
          title="Wed"
        />
        <ScheduleDay
          id="thursday-tab"
          link="#thursday"
          day="thursday"
          value="false"
          title="Thu"
        />
        <ScheduleDay
          id="friday-tab"
          link="#friday"
          day="friday"
          value="false"
          title="Fri"
        />
        <ScheduleDay
          id="saturday-tab"
          link="#saturday"
          day="saturday"
          value="false"
          title="Sat"
        />
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="sunday"
          role="tabpanel"
          aria-labelledby="sunday-tab"
        >
          <div className="row">
            <Items
              statusClass="on-air"
              status="On Air"
              startTime="2:00 PM"
              endtime="3:00 PM"
              title="Saathi Sanga Mank Kura"
              genre="A Complete Health Show"
            />
            <Items
              startTime="3:00 PM"
              endtime="4:00 PM"
              title="Yo Maya Bhanne Chij Yastai Ho"
              genre="Love Show"
            />
            <Items
              startTime="4:00 PM"
              endtime="5:00 PM"
              title="Yo Maya Bhanne Chij Yastai Ho"
              genre="Love Show"
            />
          </div>
        </div>

        <ScheduleItems id="monday" day="Monday" />
        <ScheduleItems id="tuesday" day="Tuesday" />
        <ScheduleItems id="wednesday" day="Wednesday" />
        <ScheduleItems id="thursday" day="Thursday" />
        <ScheduleItems id="friday" day="Friday" />
        <ScheduleItems id="saturday" day="Saturday" />
      </div>
    </div>
  );
};

const ScheduleDay = ({ status, id, link, day, value, title }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${status}`}
        id={id}
        data-toggle="tab"
        href={link}
        role="tab"
        aria-controls={day}
        aria-selected={value}
      >
        {title}
      </a>
    </li>
  );
};

const Items = ({ statusClass, status, startTime, endtime, title, genre }) => {
  return (
    <div
      className="item-news col-sm-6 col-md-4 wow fadeInUp"
      data-wow-delay="0.5s"
    >
      <div className="boundarys">
        <span className="time-box">
          <span className={statusClass}>{status}</span>
          <span className="start-time">
            {startTime}-{endtime}
          </span>
        </span>
        <Link to={`/programDetail`} title={title}>
          <span className="media pro-box">
            <span className="media-body">
              <span className="main-title">{title}</span>
              <span className="genre">{genre}</span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

const ScheduleItems = ({ id, day }) => {
  return (
    <div
      className="tab-pane fade"
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <p>{day}'s schedule goes here.</p>
    </div>
  );
};

export default ProgrammeSchedule;
