// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';


import './assets/styles/AppLayout.css';
import './index.css';

function AnimatedRoutes() {
    const location = useLocation();
    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw",
            scale: 0.95
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "-100vw",
            scale: 0.95
        }
    };


    const pageTransition = {
        type: "tween", // tween, spring, inertia
        ease: [0.42, 0, 0.58, 1], // Daha yumuşak bir geçiş için
        duration: 0.6      // Saniye cinsinden süre (biraz daha hızlı)
    };

    return (
        <AnimatePresence mode="wait"> {/* 'wait' modu önemlidir */}
            <Routes location={location} key={location.pathname}> {/* Routes'a location ve key prop'larını ekleyin */}
                <Route
                    path="/"
                    element={
                        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                            <HomePage />
                        </motion.div>
                    }
                />
                <Route
                    path="/ben-kimim"
                    element={
                        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                            <AboutPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/neler-yapabilirim"
                    element={
                        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                            <SkillsPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/portfolyo"
                    element={
                        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                            <PortfolioPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/iletisim"
                    element={
                        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                            <ContactPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    useEffect(() => {
        document.body.className = ''; // Önceki tüm class'ları temizle (sadece tema class'ı kalsın diye)
        document.body.classList.add(theme + '-theme'); // 'light-theme' veya 'dark-theme' class'ını ekle
        // İsteğe bağlı: Seçilen temayı localStorage'a kaydedebilirsiniz.
        // localStorage.setItem('theme', theme);
    }, [theme]); // Bu e
    return (
        <Router> {/* BrowserRouter'ı burada kullanıyoruz */}
            <div className="app-container">
                <Sidebar theme={theme} toggleTheme={toggleTheme} />
                <div className="main-content-wrapper">
                    <main className="content-area">
                        <AnimatedRoutes /> {/* Animasyonlu rotaları burada çağırıyoruz */}
                    </main>
                    <Footer /> {/* Footer'ımız */}
                </div>
            </div>
        </Router>
    );
}

export default App;
