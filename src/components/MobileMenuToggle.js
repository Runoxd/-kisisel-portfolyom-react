import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './MobileMenuToggle.css';

function MobileMenuToggle({ isOpen, toggleMenu }) {
    return (
        <button
            className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={isOpen}
        >
            {}
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
    );
}

export default MobileMenuToggle;
