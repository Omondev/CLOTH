import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Korzina from "../assets/korzina.svg";
import Profile from "../assets/profile.svg";
import "../components/Header.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <nav className="navbar">
                <div className="left-section">
                    <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div className="logo">SHOP.CO</div>
                </div>
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/">Shop</NavLink>
                    <NavLink to="/onsale">On Sale</NavLink>
                    <NavLink to="/newarrivals">New Arrivals</NavLink>
                    <NavLink to="/brands">Brands</NavLink>
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search for products..." />
                    </div>
                </div>
                <div className="icons">
                    <NavLink to="/korzinka"><img src={Korzina} alt="Cart" /></NavLink>
                    <NavLink to="/profile"><img src={Profile} alt="Profile" /></NavLink>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;