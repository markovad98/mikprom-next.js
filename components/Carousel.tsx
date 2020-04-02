import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const Carousel = () => {
  return ReactCarousel ? (
    <ReactCarousel
      showThumbs={false}
      autoPlay
      interval={3000}
      infiniteLoop
      showArrows={true}
    >
      <img src={require("../public/images/beautyPhotos/Слайд 1.jpg")} />
      <img src={require("../public/images/beautyPhotos/Слайд 2.jpg")} />
      <img src={require("../public/images/beautyPhotos/Слайд 3.jpg")} />
    </ReactCarousel>
  ) : (
    <div>Oops</div>
  );
};

export default Carousel;
