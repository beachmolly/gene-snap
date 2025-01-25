import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/gene-library">Gene Library</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
