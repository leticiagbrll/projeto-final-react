import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js';
import styles from "./About.module.css"
import fotoPerfil from "../../assets/imageAboutMe.jpeg"
import projetoUm from "../../assets/imgSlide_2.png"
import projetoDois from "../../assets/imgSlide_3.png"
import projetoTres from "../../assets/imgSlide_4.png"

const About = () => {
    const typedRef = useRef(null);

    useEffect (() => {
        const typed = new Typed(typedRef.current, {
            strings: ['sobre-mim'],
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
            <div className={`${styles.fotoSobreMim} ${styles.perfilImg}`}>
                <img src={fotoPerfil} alt="Foto de Perfil" />
            </div>
            <div className={styles.introText}>
                <p>
                    Olá! Meu nome é Letícia Souza e tenho 28 anos. Atualmente, estou cursando mestrado em Saúde Pública na FSP-USP, onde me dedico ao estudo dos ambientes alimentares domésticos de crianças e adolescentes sul-americanos. Essa área de pesquisa me fascina e me motiva a contribuir para a promoção de hábitos alimentares saudáveis desde a infância.
                </p>
            </div>
            <div className={styles.textAboutMe}>
            <p>Meu primeiro contato com o PretaLab aconteceu por meio da minha psicóloga, que me incentivou a explorar novas oportunidades de aprendizado e crescimento pessoal. Foi assim que descobri um espaço acolhedor e inclusivo, onde pude realizar um sonho de infância: aprender sobre HTML & CSS.<br />
            Desde criança, sempre tive curiosidade e vontade de entender como funcionam os códigos por trás das páginas da web, mas nunca tive a oportunidade de explorar esse universo. O PretaLab foi o lugar que me proporcionou essa oportunidade e me ajudou a dar os primeiros passos nesse caminho. 
            Durante o curso, tive a chance de mergulhar em diversos temas, desde o uso do GitHub até o desenvolvimento de páginas web com HTML, CSS, JavaScript e React. Cada nova habilidade adquirida foi uma conquista e uma excelente introdução ao vasto mundo da programação.<br />
            Atualmente, me sinto realizada por ter dado esse passo em direção aos meus interesses e objetivos. Estou ansiosa para me aprofundar ainda mais nesse conhecimento e, futuramente, quero me aventurar pelo universo do desenvolvimento back-end. A jornada está apenas começando, e estou animada para ver onde ela me levará.
            </p>
            </div>
            <div className={styles.meusProjetos}>
                <section className={styles.content}>
                    <div className={styles.projetosContainer}>
                        <h1 className={styles.tituloProjetos}>&lt; Meus Projetos &gt;</h1>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <a href="https://leticiagbrll.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.imgContainer}>
                                        <img className={styles.projetos} src={projetoUm} alt="Projeto Um" />
                                    <div className={styles.overlay}>
                                        <p className={styles.textOverlay}>Clique para Ver</p>
                                    </div>
                                    </div>
                                </a>
                                <div className={styles.textos}>
                                    <h3 className={styles.subtituloProjeto}>Currículo</h3>
                                    <p className={styles.texto}>O nosso primeiro módulo teórico foi sobre HTML & CSS. Aqui o projeto principal envolveu a criação de um currículo, a partir dos conteúdos aprendidos.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <a href="https://lf-house.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.imgContainer}>
                                        <img className={styles.projetos} src={projetoDois} alt="Projeto Dois" />
                                    <div className={styles.overlay}>
                                        <p className={styles.textOverlay}>Clique para Ver</p>
                                    </div>
                                    </div>
                                </a>
                                <div className={styles.textos}>
                                    <h3 className={styles.subtituloProjeto}>Loja</h3>
                                    <p className={styles.texto}>O segundo projeto foi um exercício de criação de loja proposto pela professora Amog. Foi um trabalho BEM desafiador, o que fica evidente quando analisamos seu resultado.</p>
                                </div>
                            </div>


                            <div className={styles.card}>
                                <a href="https://calculadora-win95.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.imgContainer}>
                                        <img className={styles.projetos} src={projetoTres} alt="Projeto Três" />
                                    <div className={styles.overlay}>
                                        <p className={styles.textOverlay}>Clique para Ver</p>
                                    </div>
                                    </div>
                                </a>
                                <div className={styles.textos}>
                                    <h3 className={styles.subtituloProjeto}>Calculadora</h3>
                                    <p className={styles.texto}>O terceiro projeto foi do módulo teórico de JavaScript. A professora Ângela propôs a criação de uma calculadora e eu tentei estilizá-la como um computador Windows-95. Me diverti bastante com esse trabalho, embora o módulo tenha sido complicado!</p>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
