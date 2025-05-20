import React from 'react';
import './PageStyles.css';
import './SkillsPage.css';
import ServiceCard from '../components/ServiceCard';
import SkillBar from '../components/SkillBar';


import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPalette,
    FaMobileAlt,FaGitAlt, FaPaintBrush, FaBrain} from 'react-icons/fa';
import {SiNextdotjs, SiTypescript,} from 'react-icons/si';

function SkillsPage() {
    const services = [
        {
            icon: <FaReact size={45} />,
            title: 'Modern Web Uygulamaları Geliştirme',
            description: 'React, Next.js gibi modern JavaScript kütüphaneleri ve framework\'leri kullanarak kullanıcı dostu, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum.',

        },
        {
            icon: <FaMobileAlt size={45} />,
            title: 'Mobil Uygulama Geliştirme',
            description: 'React Native veya Flutter gibi teknolojilerle hem iOS hem de Android platformları için performanslı ve estetik mobil uygulamalar oluşturuyorum.',

        },
        {
            icon: <FaPalette size={45} />,
            title: 'UI/UX Tasarım ve Prototipleme',
            description: 'Kullanıcı deneyimini  ve kullanıcı arayüzünü  ön planda tutarak, Figma gibi araçlarla etkileşimli prototipler ve çekici tasarımlar hazırlıyorum.',

        },
        {
            icon: <FaNodeJs size={45} />,
            title: 'Backend ve API Geliştirme',
            description: 'Node.js, Express.js ve veritabanı teknolojileri (SQL/NoSQL) kullanarak güvenli ve verimli backend sistemleri ve RESTful API\'ler geliştiriyorum.',

        },

    ];

    const skills = [
        { name: 'HTML5', percentage: 65, icon: <FaHtml5 /> },
        { name: 'CSS3 (Sass/SCSS)', percentage: 70, icon: <FaCss3Alt /> },
        { name: 'JavaScript (ES6+)', percentage: 70, icon: <FaJsSquare /> },
        { name: 'React.js', percentage: 75, icon: <FaReact /> },
        { name: 'Next.js', percentage: 70, icon: <SiNextdotjs /> },
        { name: 'Node.js / Express.js', percentage: 70, icon: <FaNodeJs /> },
        { name: 'TypeScript', percentage: 70, icon: <SiTypescript /> },
        { name: 'React Native (Mobil)', percentage: 70, icon: <FaReact /> },
        { name: 'Web Tasarım (UI/UX Prensipleri)', percentage: 60, icon: <FaPaintBrush /> },
        { name: 'Algoritma Analizi ve Veri Yapıları', percentage: 55, icon: <FaBrain /> },
        { name: 'Git & GitHub', percentage: 70, icon: <FaGitAlt /> },


    ];

    return (
        <div className="page-content skills-page">
            <h1>Neler Yapabilirim?</h1>

            {services.length > 0 && (
                <section className="services-section">
                    <h2>Hizmetlerim / Ana Yeteneklerim</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                // link prop'u burada gönderilmiyor
                            />
                        ))}
                    </div>
                </section>
            )}

            {skills.length > 0 && (
                <section className="technical-skills-section">
                    <h2>Teknik Becerilerim</h2>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                skillName={skill.name}
                                percentage={skill.percentage}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default SkillsPage;
