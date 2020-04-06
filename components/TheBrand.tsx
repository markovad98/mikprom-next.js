import React from 'react';

const TheBrand = () => {
    return (
        <section className="brand container">
            <h2 className="choice__brand">ВЫБЕРЕТЕ БРЕНД:</h2>
            <a ><img className="logo-chick" src={require("../public/images/logos/chick.svg")} alt="chick"/></a>
            <a ><img className="logo-micprom" src={require("../public/images/logos/mikpromLogo.png")} alt="micprom"/></a>
        </section>
        )
    }
    
    export default TheBrand;