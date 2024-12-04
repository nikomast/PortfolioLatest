import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <nav>
            <div className="header">
            <Link to="/">Main</Link>
            <Link to="/paper">Thesis</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
