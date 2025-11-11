import React from 'react';
import styles from './Category.module.css';
import Card from '../Card'; // Precisamos importar o Card

// Recebe 'categoryName' e 'videos' como props
function Category({ categoryName, videos }) {
    return (
        <div className={styles.category}>
            <h2>{categoryName}</h2>
            <div className={styles.cardContainer}>
                {/* Mapeia a lista de vídeos e passa os dados para o Card */}
                {videos.map(video => (
                  <Card 
                    key={video.id} 
                    id={video.id}
                    title={video.title}
                    url={video.url}
                    cover={video.cover}
                  />
                ))}
            </div>
        </div>
    );
}

export default Category;