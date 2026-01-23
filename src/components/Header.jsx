import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header className="head">
            <div className="navbar">
                <h2><Link to="/" className="nav-link">Home</Link></h2>
                <h2><Link to="/about" className="nav-link">About</Link></h2>
                <h2><Link to="/projects" className="nav-link">Projects</Link></h2>
                <h2><Link to="/contact" className="nav-link">Contact</Link></h2>
            </div>
        </header>
    );
}