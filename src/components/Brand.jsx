import React from "react";
import versace from '../assets/vrsace.svg'
import zara from '../assets/zara.svg'
import gucci from '../assets/gucci.svg'
import prada from '../assets/prada.svg'
import clain from '../assets/clain.svg'



import "../components/Brand.css";

const Brand = () => {
    return (
    
            <div className="brand-container">
                <img src={versace} alt="Versace" className="brand-img" />
                <img src={zara} alt="Zara" className="brand-img" />
                <img src={gucci} alt="Gucci" className="brand-img" />
                <img src={prada} alt="Prada" className="brand-img bold" />
                <img src={clain} alt="Calvin Klein" className="brand-img" />
            </div>

    );
};

export default Brand;
