import "./offer.scss";
import DoneIcon from "@material-ui/icons/Done";

import React from "react";

const Offer = () => {
  return (
    <div className="offer" id="offer">
      <div className="offer__content wrapper">
        <h2 className="title">Oferta</h2>
        <div className="offer__box offer__box--photography">
          <div className="box__img"></div>
          <div className="box__text">
            <h3>Fotografia</h3>
            <ul>
              <li>
                <DoneIcon className="done" />
                <span>imprezy okolicznościowe</span>
              </li>
              <li>
                <DoneIcon className="done" />
                <span>sesje indywidualne</span>
              </li>
              <li>
                <DoneIcon className="done" />
                <span>fotografia produktowa</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="offer__box offer__box--painting box">
          <div className="box__img"></div>
          <div className="box__text">
            <h3>Malarstwo</h3>
            <ul>
              <li>
                <DoneIcon className="done" />
                <span>malowanie na płótnie</span>
              </li>
              <li>
                <DoneIcon className="done" />
                <span>malowanie wnętrz</span>
              </li>
              <li>
                <DoneIcon className="done" />
                <span>coś tam innnego</span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" offer__box offer__box--designing box">
          <div className="box__img"></div>
          <div className="box__text">
            <h3>Projektowanie</h3>
            <ul>
              <li>
                <DoneIcon className="done" />
                <span>projektowanie maszyn</span>
              </li>
              <li>
                <DoneIcon className="done" />
                <span>indywidualne projekty</span>
              </li>
              <li>
                <DoneIcon className="done" />
                <span>coś tam innego</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
