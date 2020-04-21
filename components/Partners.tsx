import React from "react";
import Carousel from "react-multi-carousel";

const Partners = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const carouselItems = [
    require("../public/images/logos/burgerking.jpg"),
    require("../public/images/logos/apple.png"),
    require("../public/images/logos/dimok.png"),
    require("../public/images/logos/express.png"),
    require("../public/images/logos/mandarin_srt.jpg"),
    require("../public/images/logos/tomato.png"),
    require("../public/images/logos/uley.png"),
    require("../public/images/logos/whitevalley.jpg")
  ];

  return (
    <section className="partners container">
      <h2 className="partners-title">Наши партнеры</h2>
      <article className="partners-carousel">
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
        >
          {carouselItems.map((img: string, idx: number) => (
            <img
              className="partners-carousel__item"
              key={idx}
              src={img}
              alt=""
            />
          ))}
        </Carousel>
      </article>
    </section>
  );
};

export default Partners;
