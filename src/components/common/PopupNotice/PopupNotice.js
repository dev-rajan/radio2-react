import React, { useState } from "react";
import Notice from "../../../assets/images/popup-notice.jpg";

const PopupNotice = () => {
  const [close, setClose] = useState(true);

  const handleClick = () => {
    setClose(false);
  };

  return <>{close ? <Modal handleClick={handleClick} /> : null}</>;
};

const Modal = ({ handleClick }) => {
  return (
    <div className="modalbox">
      <div className="modal_content">
        <div className="imagebox">
          <figure>
            <img src={Notice} alt="" />
            <a
              className="close_btn"
              href="javascript:void(0)"
              onClick={handleClick}
              title="Close"
            >
              <span className="arrows lnr lnr-cross"></span>
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PopupNotice;
