
import React from 'react';
import profilResmi from '../assets/images/profil-fotom.jpg';
import { NavLink } from 'react-router-dom'; // react-router-dom'dan NavLink
import './Sidebar.css';
import {
    FaHome,
    FaUser,
    FaCog,
    FaBriefcase,
    FaEnvelope,
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaSun,
    FaMoon
} from 'react-icons/fa';

function Sidebar({ theme, toggleTheme, isMobileMenuOpen, toggleMobileMenu }) {

    const githubUsername = "Runoxd";
    const twitterUsername = "oonur_ozdmr";
    const facebookUsername = "Onur Özdemir  ";
    const linkedinUsername = "/onur-özdemir-012516253/";
    const instagramUsername = "onur_o_zdmr";
    const handleNavLinkClick = () => {
           if (isMobileMenuOpen) { // Sadece mobil menü açıksa çalışır
                  toggleMobileMenu(); // App.js'den gelen menüyü kapatma fonksiyonunu çağırır
               }
          };
    return (
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                {}
                <img src={profilResmi} className="sidebar-profile-image" />
                <h2>Muhammet Onur Özdemir </h2>
                <p>Yazılımcı / Bilgisayar Mühendisi</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""} end onClick={handleNavLinkClick}>
                            <FaHome /> Ana Sayfa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ben-kimim" className={({isActive}) => isActive ? "active-link" : ""} onClick={handleNavLinkClick}>
                            <FaUser /> Ben Kimim?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/neler-yapabilirim" className={({isActive}) => isActive ? "active-link" : ""} onClick={handleNavLinkClick}>
                            <FaCog /> Neler Yapabilirim?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolyo" className={({isActive}) => isActive ? "active-link" : ""} onClick={handleNavLinkClick}>
                            <FaBriefcase /> Portfolyo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/iletisim" className={({isActive}) => isActive ? "active-link" : ""} onClick={handleNavLinkClick}>
                            <FaEnvelope /> İletişim
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="social-icons-sidebar">
                    {githubUsername && githubUsername !== '#' && (
                        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FaGithub />
                        </a>
                    )}
                    {twitterUsername && twitterUsername !== '#' && (
                        <a href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                            <FaTwitter />
                        </a>
                    )}
                    {facebookUsername && facebookUsername !== '#' && (
                        <a href={`https://facebook.com/${facebookUsername}`} target="_blank" rel="noopener noreferrer" title="Facebook">
                            <FaFacebook />
                        </a>
                    )}
                    {linkedinUsername && linkedinUsername !== '#' && (
                        <a href={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                    )}
                    {instagramUsername && instagramUsername !== '#' && (
                        <a href={`https://instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer" title="Instagram">
                            <FaInstagram />
                        </a>
                    )}
                </div>
                {}
                <button
                         onClick={toggleTheme}
                        className="theme-toggle-button"
                         title={theme === 'light' ? 'Koyu Moda Geç' : 'Açık Moda Geç'}
                         aria-label="Tema Değiştir"
                >{theme === 'light' ? <FaMoon /> : <FaSun />} {}
                    <span className="theme-toggle-text"> {}
                        {theme === 'light' ? 'Koyu Mod' : 'Açık Mod'} {}
                    </span>
                </button>



                <p className="copyright-sidebar">
                    &copy; {new Date().getFullYear()} Muhammet Onur Özdemir.
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;