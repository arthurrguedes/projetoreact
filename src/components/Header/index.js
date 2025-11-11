import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./Header.module.css";

    function Header(){
        return (
            //Conteúdo a ser exibido
            // JSX = html + xml (html com css dentro do js)
            <header className={styles.header}>
                <span>Aula Senac</span>
                <nav>
                    <a href="#"> Home</a>
                    <a href="#"> Senac</a>
                </nav>
            </header>
        )
    }
    export default Header;