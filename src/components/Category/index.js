import React from 'react';
import styles from './Category.module.css';
import Card from '../Card'; 

function Category({ categoryName, videos }) {
    return (
        <div className={styles.category}>
            <h2>{categoryName}</h2>
            <div className={styles.cardContainer}>
                {videos.map(video => (
                  <Card 
                    key={video.id} 
                    id={video.id}
                    title={video.title}
                    cover={video.cover}
                  />
                ))}
            </div>
        </div>
    );
}

export default Category;