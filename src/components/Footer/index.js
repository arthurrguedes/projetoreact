import React from 'react';
import styles from "./Footer.module.css";

function Footer() {
    return (
        // Conteúdo a ser exibido
        <footer className={styles.footer}>
            <nav>
                <a href="#"> +ti ® | Todos os direitos reservados</a>
            </nav>
        </footer>
    )
}
export default Footer;