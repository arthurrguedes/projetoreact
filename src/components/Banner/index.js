import React from 'react';
import styles from './Banner.module.css';

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.slogan}>
                <h2>Onde sua jornada de dev começa</h2>
                <p>Dê play no seu futuro em TI</p>
            </div>
            <div className={styles.logo}>
                {}
                <img 
                  src="/playlogo.png" 
                  alt="Logo +ti" 
                  className={styles.logoImage} 
                />
            </div>
        </section>
    );
}

export default Banner;