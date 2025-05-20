// src/components/MobileMenuToggle.js
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menü ve kapatma ikonları
import './MobileMenuToggle.css'; // Bu dosya için CSS oluşturacağız

// isOpen ve toggleMenu proplarını App.js'den alacak
function MobileMenuToggle({ isOpen, toggleMenu }) {
    return (
        <button
            className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`} // Duruma göre class ekle
            onClick={toggleMenu} // Tıklandığında App.js'deki toggleMobileMenu fonksiyonunu çağırır
            aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"} // Erişilebilirlik için etiket
            aria-expanded={isOpen} // Menünün açık olup olmadığını belirtir
        >
            {/* isOpen durumuna göre FaTimes (kapatma) veya FaBars (hamburger) ikonunu gösterir */}
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
    );
}

export default MobileMenuToggle;
