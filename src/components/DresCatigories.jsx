import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/DresCatigories.css";
import Casual from "../assets/causual.png";
import Formal from "../assets/formal.png";
import Party from "../assets/party.png";
import Gym from "../assets/gym.png";

const categories = [
    { name: "Casual", image: Casual },
    { name: "Formal", image: Formal },
    { name: "Party", image: Party },
    { name: "Gym", image: Gym },
];

const DressCategories = () => {
    const navigate = useNavigate();

    return (
        <div className="dress-container">
            <div className="dress-content">
                <h2 className="dress-title">BROWSE BY DRESS STYLE</h2>
                <div className="dress-grid">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="dress-card"
                            onClick={() => navigate(`/products?categories=${category.name.toLowerCase()}`)}
                        >
                            <img src={category.image} alt={category.name} className="dress-image" />
                            <p className="dress-name">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DressCategories;

