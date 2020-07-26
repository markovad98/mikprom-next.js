import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const CertificateCarousel = () => {

  return (
      <React.Fragment>
          <div className={"container"}>
              <h1 className="certificate-carousel-title">СЕРТИФИКАТЫ СООТВЕТСТВИЯ</h1>
          </div>
        <div style={{
            background: "#F8F8F8",
        }} className="certificate-carousel">
            <section style={{
                display: "flex",
                justifyContent: "center",
            }} className="container">
                    <ReactCarousel
                        width={"100%"}
                        showThumbs={false}
                        interval={3000}
                        infiniteLoop
                        showArrows={true}
                        dynamicHeight
                    >
                        <img className="img-quality" src={require('../public/images/certifications/Sertefikat_GOST_MiKprom_1.jpg')} alt=""/>
                        <img className="img-quality" src={require('../public/images/certifications/Sertefikat_GOST_MiKprom_2.jpg')} alt=""/>
                        <img className="img-quality" src={require('../public/images/certifications/sertifikat_GOST_20.02.2017-19.02.2020.jpeg')} alt=""/>
                        <img className="img-quality" src={require('../public/images/certifications/sertifikat_GOST_20.02.2017-19.02.2020_prilozhenie_.jpeg')} alt=""/>
                    </ReactCarousel>
            </section>
        </div>
      </React.Fragment>
  );
};

export default CertificateCarousel;
