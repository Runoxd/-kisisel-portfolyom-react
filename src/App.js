
import React from 'react';
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

function AnimatedRoutes() {
    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0,

        },
        in: {
            opacity: 1,
            // x: 0
        },
        out: {
            opacity: 0,
        }
    };


    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    return (
        <AnimatePresence mode="wait"> {}
            <Routes location={location} key={location.pathname}> {}
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
    return (
        <Router> {}
            <div className="app-container">
                <Sidebar /> {}
                <div className="main-content-wrapper">
                    <main className="content-area">
                        <AnimatedRoutes /> {}
                    </main>
                    <Footer /> {}
                </div>
            </div>
        </Router>
    );
}

export default App;