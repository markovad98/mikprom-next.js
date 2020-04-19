import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const CertificateCarousel = () => {
  return (
    <section className="certificate-carousel">
      <div className="container">
        <ReactCarousel
          width={"100%"}
          showThumbs={false}
          interval={3000}
          infiniteLoop
          showArrows={true}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "black"
            }}
          ></div>
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "brown"
            }}
          ></div>
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "silver"
            }}
          ></div>
        </ReactCarousel>
      </div>
    </section>
  );
};

export default CertificateCarousel;
