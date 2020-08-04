import React from "react";

const MainBanner = () => {
    return (
        <div className="main-banner">
            <img className="main-banner__img" src={require("../public/images/newMainBanner-min.png")} alt=""/>
            <h1 className="main-banner__title">НАДЕЖНЫЙ ПРОИЗВОДИТЕЛЬ КУРИНОЙ ПРОДУКУЦИИ</h1>
        </div>
    )
}

export default MainBanner;