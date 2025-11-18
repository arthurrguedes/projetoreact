import React from 'react';
import styles from './Contato.module.css';
import Container from '../../components/Container';

function Contato() {
  return (
    <main className={styles.main}>
        <Container>
            <h1 className={styles.title}>Entre em Contato</h1>
            <div className={styles.contactInfo}>
                <p>Para dúvidas, sugestões ou parcerias, entre em contato através dos canais abaixo:</p>
                
                <p><strong>Email:</strong> <a href="mailto:contato@plusti.dev">contato@plusti.dev</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/arthurrguedes" target="_blank" rel="noopener noreferrer">@arthurrguedes</a></p>
                
                <p>Agradecemos o seu interesse no projeto +ti!</p>
            </div>
        </Container>
    </main>
  );
}

export default Contato;