import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface HeaderProps {
  // Props can be extended as needed
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            {/* 
              PLACEHOLDER: Nagarro logo
              Original: SVG logo with green infinity-like symbol and "nagarro" text
              Dimensions: approx. 150px × 40px
            */}
            <a href="/" aria-label="Nagarro Home">
              <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 20C40 10 50 10 60 20C70 30 70 30 60 40C50 50 40 50 30 40C20 30 20 30 30 20Z" fill="none" stroke="#47D7AC" strokeWidth="2"/>
                <path d="M40 25C45 20 45 20 50 25C55 30 55 30 50 35C45 40 45 40 40 35C35 30 35 30 40 25Z" fill="none" stroke="#47D7AC" strokeWidth="2"/>
                <text x="70" y="28" fontFamily="EquipExtended" fontSize="20" fill="white">nagarro</text>
              </svg>
            </a>
          </div>
          
          <nav className="header__nav desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#industries" className="nav-link">industries</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">services</a>
              </li>
              <li className="nav-item">
                <a href="#insights" className="nav-link">insights</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">about</a>
              </li>
              <li className="nav-item">
                <a href="#careers" className="nav-link">careers</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">contact us</a>
              </li>
            </ul>
          </nav>
          
          <div className="header__actions">
            <button className="search-button" aria-label="Search">
              {/* PLACEHOLDER: Search icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="language-selector">
              <button 
                className="language-button" 
                onClick={toggleLanguage}
                aria-expanded={languageOpen}
                aria-haspopup="true"
              >
                <span>en</span>
                {/* PLACEHOLDER: Globe icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 7H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 1C8.5013 2.73835 9.3953 4.8033 9.5 7C9.3953 9.1967 8.5013 11.2616 7 13C5.4987 11.2616 4.6047 9.1967 4.5 7C4.6047 4.8033 5.4987 2.73835 7 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {languageOpen && (
                <motion.div 
                  className="language-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    <li><a href="?lang=en">en</a></li>
                    <li><a href="?lang=de">de</a></li>
                    <li><a href="?lang=ja">ja</a></li>
                    <li><a href="?lang=tr">tr</a></li>
                    <li><a href="?lang=es">es</a></li>
                    <li><a href="?lang=fr">fr</a></li>
                  </ul>
                </motion.div>
              )}
            </div>
            
            <button 
              className={`mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="container">
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <a href="#industries" className="mobile-nav-link">industries</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#services" className="mobile-nav-link">services</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#insights" className="mobile-nav-link">insights</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#about" className="mobile-nav-link">about</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#careers" className="mobile-nav-link">careers</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#contact" className="mobile-nav-link">contact us</a>
                </li>
              </ul>
              
              <div className="mobile-language-selector">
                <ul>
                  <li><a href="?lang=en" className="active">en</a></li>
                  <li><a href="?lang=de">de</a></li>
                  <li><a href="?lang=ja">ja</a></li>
                  <li><a href="?lang=tr">tr</a></li>
                  <li><a href="?lang=es">es</a></li>
                  <li><a href="?lang=fr">fr</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
