import React from 'react';
import styles from './Card.module.css';

// Recebe os dados do vídeo via props
function Card({ id, title, url, cover }) {
    return (
        <a 
          href={url} 
          target="_blank"
          rel="noopener noreferrer" // Boa prática de segurança
          className={styles.card}
        >
          <img 
            src={cover} 
            alt={title} 
            className={styles.cover} 
          />
          {}
          <span className={styles.title}>{title}</span>
        </a>
    );
}

export default Card;