import "./portfolio.scss";

import img1 from "../../images/portfolio/resize_1.jpg";
import img2 from "../../images/portfolio/resize_2.jpg";
import img3 from "../../images/portfolio/resize_3.jpg";
import img4 from "../../images/portfolio/resize_4.jpg";
import img5 from "../../images/portfolio/resize_5.jpg";
import img6 from "../../images/portfolio/resize_6.JPG";
import img7 from "../../images/portfolio/resize_7.jpg";
import img8 from "../../images/portfolio/resize_8.jpg";

const Portfolio = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__content wrapper">
        <h2 className="title">Przykładowe prace</h2>
        <div className="gallery">
          {data.map((item, i) => {
            return (
              <div className="gallery__image" key={i}>
                {/* <img src={item.imgSrc} alt="" className="image" /> */}
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
