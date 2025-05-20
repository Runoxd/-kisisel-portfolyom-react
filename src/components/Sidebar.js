
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
} from 'react-icons/fa';

function Sidebar() {

    const githubUsername = "Runoxd";
    const twitterUsername = "oonur_ozdmr";
    const facebookUsername = "Onur Özdemir  ";
    const linkedinUsername = "/onur-özdemir-012516253/";
    const instagramUsername = "onur_o_zdmr";
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                {}
                <img src={profilResmi} className="sidebar-profile-image" />
                <h2>Muhammet Onur Özdemir </h2>
                <p>Yazılımcı / Bilgisayar Mühendisi</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                            end
                        >
                            <FaHome /> Ana Sayfa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ben-kimim"
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            <FaUser /> Ben Kimim?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/neler-yapabilirim"
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            <FaCog /> Neler Yapabilirim?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolyo"
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            <FaBriefcase /> Portfolyo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/iletisim"
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
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
                <p className="copyright-sidebar">
                    &copy; {new Date().getFullYear()} Muhammet Onur Özdemir.
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;