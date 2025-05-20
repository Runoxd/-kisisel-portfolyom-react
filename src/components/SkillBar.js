import React from 'react';
import './SkillBar.css';

function SkillBar({ skillName, percentage, icon }) {
    return (
        <div className="skill-item">
            <div className="skill-info">
                {icon && <span className="skill-icon">{icon}</span>}
                <span className="skill-name">{skillName}</span>
                <span className="skill-percentage">{percentage}%</span>
            </div>
            <div className="skill-bar-container">
                <div
                    className="skill-bar-progress"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
}

export default SkillBar;