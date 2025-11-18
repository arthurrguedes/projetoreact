import React from 'react';
import styles from './Sobre.module.css';
import Container from '../../components/Container';

function Sobre() {
  return (
    <main className={styles.main}>
        <Container>
            <h1 className={styles.title}>Sobre o +ti</h1>
            <div className={styles.content}>
                <p>O +ti é um projeto de estudo e demonstração de conceitos de desenvolvimento Front-end utilizando React JS.</p>
                <p>Nossa missão é simular uma plataforma de conteúdo para desenvolvedores, reunindo vídeos sobre React, JavaScript e CSS, organizados por categorias para facilitar o aprendizado e a busca. Todos os vídeos listados na página inicial são exemplos de conteúdo relevante para quem está começando ou aprofundando sua jornada em TI.</p>
                <p>O projeto foi desenvolvido com foco em:
                    <ul>
                        <li>Componentização e uso de props.</li>
                        <li>Gerenciamento de estado (useState).</li>
                        <li>Utilização de react-router-dom para navegação.</li>
                        <li>Estilização com CSS Modules para escopo de estilos.</li>
                        <li>Implementação de lógica de busca (simulada) e filtragem de conteúdo.</li>
                    </ul>
                </p>
            </div>
        </Container>
    </main>
  );
}

export default Sobre;