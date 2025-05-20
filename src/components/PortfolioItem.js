import React from 'react';
import './PortfolioItem.css';
import { FaLink, FaGithub, FaSearchPlus } from 'react-icons/fa';

function PortfolioItem({ image, title, category, onClick, liveLink, githubLink }) {
    return (
        <div className="portfolio-item" onClick={onClick}>
            <img src={image} alt={title} className="portfolio-image" />
            <div className="portfolio-overlay">
                <div className="portfolio-item-content">
                    <FaSearchPlus className="action-icon view-icon" />
                    <h3 className="portfolio-title">{title}</h3>
                    <p className="portfolio-category">{category}</p>
                    <div className="portfolio-links">
                        {liveLink && liveLink !== '#' && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="action-icon">
                                <FaLink />
                            </a>
                        )}
                        {githubLink && githubLink !== '#' && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="action-icon">
                                <FaGithub />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;