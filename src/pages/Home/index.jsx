import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from "./Home.module.css";
import Banner from "../../components/Banner";
import Button from "../../components/Button";


const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['portfolio.react'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            startDelay: 1000,
            showCursor: false,
            onComplete: (self) => {
                const cursor = self.el.querySelector('.typed-cursor');
                if (cursor) cursor.style.display = 'none';
            }
        });
        return () => {
            typed.destroy();
        };
    },);

    return (
        <>
            <div className={styles.introText}>
                /* SEJAM BEM VINDOS AO MEU... */
            </div>
            <div className={styles.header}>
                {/* As tags "{ /}" estão estáticas */}
                <h1 className={`${styles.typingEffect} ${styles.tag}`}>
                    <span>&#123;</span>
                    {/* O elemento onde o texto "portfolio.react" será digitado */}
                    <span className={styles.title} ref={typedRef}></span>
                    <span className={styles.cursor}></span>
                    <span>&#125;</span>
                </h1>
            </div>
            <Banner />
            <div className={styles.pretaLab}>
                <h1>&lt;pretaLab&gt;</h1>
                <div className={styles.sobrePretaLab}>
                ...é uma plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, por meio de ciclos formativos, rede de profissionais, mercado de trabalho, consultorias e estudos.
                </div>
                <div className={styles.containerVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pGiWyIkJvHw?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                </div>
                <div className={styles.botaoPretaLab}>
                    <Button>&#123;saiba_mais&#125;</Button>
                </div>
        </>
    );
};

export default Home;

