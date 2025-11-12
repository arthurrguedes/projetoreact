import React from 'react';
import styles from "./Header.module.css";

// SVG para o ícone de busca
const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21L16.65 16.65" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 1. Recebe 'searchTerm' e 'setSearchTerm' como props
function Header({ searchTerm, setSearchTerm }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                +ti
            </div>
            {/* 2. Substituímos a <nav> por um container de busca */}
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
        </header>
    )
}
export default Header;