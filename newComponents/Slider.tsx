import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

interface IProps {
    images: any[];
}

const Slider: React.FC<IProps> = ({ images }) => {
    return ReactCarousel ? (
        <ReactCarousel
            showThumbs={false}
            autoPlay
            interval={3000}
            infiniteLoop
            showArrows={true}
        >
            {images.map(img => (
                <img src={img} alt="Микпром купить мясо"/>
            ))}
        </ReactCarousel>
    ) : (
        <div>Oops</div>
    );
};

export default Slider;