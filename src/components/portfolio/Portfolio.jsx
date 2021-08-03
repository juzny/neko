import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
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
  const photos = [
    {
      src: img1,
      width: 4,
      height: 3,
    },
    {
      src: img2,
      width: 1,
      height: 1,
    },
    {
      src: img3,
      width: 3,
      height: 4,
    },
    {
      src: img4,
      width: 1,
      height: 1,
    },
    {
      src: img5,
      width: 3,
      height: 2,
    },
    {
      src: img6,
      width: 3,
      height: 4,
    },
    {
      src: img7,
      width: 2,
      height: 2,
    },
    {
      src: img8,
      width: 4,
      height: 3,
    },
    {
      src: img9,
      width: 4,
      height: 3,
    },
    {
      src: img10,
      width: 3,
      height: 4,
    },
    {
      src: img11,
      width: 4,
      height: 3,
    },
    {
      src: img12,
      width: 1,
      height: 1,
    },
    {
      src: img13,
      width: 4,
      height: 3,
    },
    {
      src: img14,
      width: 3,
      height: 2,
    },
    {
      src: img15,
      width: 3,
      height: 4,
    },
    {
      src: img16,
      width: 4,
      height: 3,
    },
    {
      src: img17,
      width: 1,
      height: 1,
    },
    {
      src: img18,
      width: 4,
      height: 3,
    },
    {
      src: img19,
      width: 3,
      height: 4,
    },
    {
      src: img20,
      width: 3,
      height: 4,
    },
    {
      src: img21,
      width: 4,
      height: 3,
    },
    {
      src: img22,
      width: 1,
      height: 1,
    },
    {
      src: img23,
      width: 4,
      height: 3,
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__content wrapper">
        <h2 className="title">
          Przykładowe <br />
          prace
        </h2>
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Portfolio;
