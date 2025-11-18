import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Watch.module.css';
import Container from '../../components/Container'; 

function Watch() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                const foundVideo = data.videos.find(v => v.id === id);
                setVideo(foundVideo);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar vídeo:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <main className={styles.main}>
                <Container>
                    <h1 className={styles.title} style={{ color: '#aaa' }}>Carregando...</h1>
                </Container>
            </main>
        );
    }

    if (!video) {
        return (
            <main className={styles.main}>
                <Container>
                    <h1 className={styles.title} style={{ color: 'red' }}>Vídeo não encontrado.</h1>
                    <p>O ID <strong>{id}</strong> não corresponde a nenhum vídeo na nossa base de dados.</p>
                </Container>
            </main>
        );
    }

    const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;

    return (
        <main className={styles.main}>
            <Container>
                <h1 className={styles.title}>{video.title}</h1>

                <div className={styles.videoWrapper}>
                    <iframe 
                        src={embedUrl} 
                        title={video.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Adicione web-share para compatibilidade
                        allowFullScreen
                    ></iframe>
                </div>
            </Container>
        </main>
    );
}

export default Watch;