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
      <img src={require("../public/images/chickenPhotos/sliderChicken.png")} alt='Mikprom chicken' />
      <img src={require("../public/images/chickenPhotos/chickenSlider2.png")} alt='Микпром курица' />
      <img src={require("../public/images/chickenPhotos/chickenSlider3.png")} alt='Микпром мясо купить' />
    </ReactCarousel>
  ) : (
    <div>Oops</div>
  );
};

export default Carousel;
