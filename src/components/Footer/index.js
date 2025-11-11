import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./Footer.module.css";

    function Footer(){
        return (
            //Conteúdo a ser exibido
            // JSX = html + xml (html com css dentro do js)
            <header className={styles.footer}>
                <nav>
                    <a href="#"> Todos os direitos reservados</a>
                </nav>
            </header>
        )
    }
    export default Footer;