import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./portfolio.scss";

import img1 from "../../images/portfolio/resize_1.jpg";
import img2 from "../../images/portfolio/resize_2.jpg";
import img3 from "../../images/portfolio/resize_3.jpg";
import img4 from "../../images/portfolio/resize_4.jpg";
import img5 from "../../images/portfolio/resize_5.jpg";
import img6 from "../../images/portfolio/resize_6.JPG";
import img7 from "../../images/portfolio/resize_7.jpg";
import img8 from "../../images/portfolio/resize_8.jpg";
import img9 from "../../images/portfolio/resize_9.jpg";
import img10 from "../../images/portfolio/resize_10.jpg";
import img11 from "../../images/portfolio/resize_11.JPG";
import img12 from "../../images/portfolio/resize_12.jpg";
import img13 from "../../images/portfolio/resize_13.jpg";
import img14 from "../../images/portfolio/resize_14.JPG";
import img15 from "../../images/portfolio/resize_15.jpg";
import img16 from "../../images/portfolio/resize_16.JPG";
import img17 from "../../images/portfolio/resize_17.JPG";
import img18 from "../../images/portfolio/resize_18.jpg";
import img19 from "../../images/portfolio/resize_19.jpg";
import img20 from "../../images/portfolio/resize_20.JPG";
import img21 from "../../images/portfolio/resize_21.JPG";
import img22 from "../../images/portfolio/resize_22.JPG";
import img23 from "../../images/portfolio/resize_23.JPG";

const Portfolio = () => {
  let data = [
    {
      imgSrc: img1,
    },
    {
      imgSrc: img2,
    },
    {
      imgSrc: img3,
    },
    {
      imgSrc: img4,
    },
    {
      imgSrc: img5,
    },
    {
      imgSrc: img6,
    },
    {
      imgSrc: img7,
    },
    {
      imgSrc: img8,
    },
    {
      imgSrc: img9,
    },
    {
      imgSrc: img10,
    },
    {
      imgSrc: img11,
    },
    {
      imgSrc: img12,
    },
    {
      imgSrc: img13,
    },
    {
      imgSrc: img14,
    },
    {
      imgSrc: img15,
    },
    {
      imgSrc: img16,
    },
    {
      imgSrc: img17,
    },
    {
      imgSrc: img18,
    },
    {
      imgSrc: img19,
    },
    {
      imgSrc: img20,
    },
    {
      imgSrc: img21,
    },
    {
      imgSrc: img22,
    },
    {
      imgSrc: img23,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const length = model.length;
  const showImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const nextImage = () => {
    setTempImgSrc(tempImgSrc === length - 1 ? 0 : tempImgSrc + 1);
  };
  return (
    <div className="portfolio" id="portfolio">
      <div className={model ? "model open" : "model"}>
        <CloseIcon className="model__close" onClick={() => setModel(false)} />
        <ArrowLeftIcon className="left" />
        <ArrowRightIcon className="right" onClick={nextImage} />
        <img src={tempImgSrc} alt="" className="model__image" />
      </div>
      <div className="portfolio__content wrapper">
        <h2 className="title">
          Przykładowe <br />
          prace
        </h2>
        <div className="gallery">
          {data.map((item, i) => {
            return (
              <div className="gallery__image" key={i} onClick={() => showImage(item.imgSrc)}>
                <div className="gallery__image--item" style={{ backgroundImage: `url(${item.imgSrc})` }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
