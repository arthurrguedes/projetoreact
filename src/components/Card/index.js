import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id, title, cover }) {
    const linkPath = `/video/${id}`; 

    return (
        <Link 
          to={linkPath} 
          className={styles.card}
        >
          <img 
            src={cover} 
            alt={title} 
            className={styles.cover} 
          />
          <span className={styles.title}>{title}</span>
        </Link>
    );
}

export default Card;