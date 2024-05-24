import React from "react";
import { Link } from "react-router-dom";
import './components.css';

const Header = () => {
    return (
        <nav>
            <div className="header">
            <Link to="/">Main</Link>
            <Link to="/contact">Contact</Link>
            {/* Add more navigation links as needed */}
            </div>
        </nav>
    );
};

export default Header;
