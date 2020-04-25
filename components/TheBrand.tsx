import React from 'react';

const TheBrand = () => {
    return (
        <section className="brand container">
            <h2 className="choice__brand">ВЫБЕРЕТЕ БРЕНД:</h2>
            <div className="logo-brand">
                <a ><img className="logo-chick" src={require("../public/images/logos/chick.png")} alt="chick"/></a>
                <a ><img className="logo-micprom" src={require("../public/images/logos/mikpromLogo.png")} alt="micprom"/></a>
            </div>
        </section>
        )
    }
    
    export default TheBrand;