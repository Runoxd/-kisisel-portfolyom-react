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
import MobileMenuToggle from './components/MobileMenuToggle'; // Bu import doğru
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
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: 0.6
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(theme + '-theme');
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-active');
        } else {
            document.body.classList.remove('mobile-menu-active');
        }
    }, [theme, isMobileMenuOpen]);

    return (
        <Router>
            <div className={`app-container ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
                {}
                <Sidebar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                />
                {}

                <MobileMenuToggle isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

                <div className="main-content-wrapper">
                    <main className="content-area" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
