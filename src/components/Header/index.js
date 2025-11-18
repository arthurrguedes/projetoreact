import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Header.module.css";

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21L16.65 16.65" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Header({ searchTerm, setSearchTerm }) {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                +ti
            </Link>
            
            <div className={styles.navContainer}>
                <nav className={styles.navLinks}>
                    <Link 
                      to="/" 
                      className={location.pathname === '/' ? styles.active : ''}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/sobre" 
                      className={location.pathname === '/sobre' ? styles.active : ''}
                    >
                      Sobre
                    </Link>
                    <Link 
                      to="/contato" 
                      className={location.pathname === '/contato' ? styles.active : ''}
                    >
                      Contato
                    </Link>
                </nav>
                
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <span className={styles.searchIcon}>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        </header>
    )
}
export default Header;