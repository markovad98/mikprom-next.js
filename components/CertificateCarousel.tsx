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
          dynamicHeight
        >
            <img src={require('../public/images/certifications/Sertefikat_GOST_MiKprom_1.jpg')} alt=""/>
            <img src={require('../public/images/certifications/Sertefikat_GOST_MiKprom_2.jpg')} alt=""/>
            <img src={require('../public/images/certifications/sertifikat_GOST_20.02.2017-19.02.2020.jpeg')} alt=""/>
            <img src={require('../public/images/certifications/sertifikat_GOST_20.02.2017-19.02.2020_prilozhenie_.jpeg')} alt=""/>
        </ReactCarousel>
      </div>
    </section>
  );
};

export default CertificateCarousel;
