import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Nav = () => {
    const location = useLocation();

    return (
        <nav>
            <img className="logo" src="/image/logo.svg" alt="Logo Kasa"/>
            <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'navlink navlink-active' : 'navlink'}>Accueil</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'navlink navlink-active' : 'navlink'}>À Propos</Link></li>
            </ul>
        </nav>
    );
}