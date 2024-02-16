import React, { useState, useEffect } from 'react';
import './banner.css';
import homeImage from '../../assets/imageReact.jpg';

const Banner = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsScrollingDown(currentPosition > (prevPosition || 0));
      setPrevPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevPosition]);

  return (
    <div className="banner">  
      <header className={`backgroundImage ${isScrollingDown ? 'fade-out' : 'fade-in'}`}>
        <img
          src={homeImage}
          alt="A imagem principal da minha homepage"
          title="Título da imagem principal"
        />
        <div className={`overlay-text ${isScrollingDown ? 'fade-in' : 'fade-out'}`}>
          <div className="subtitulo">
            <p>
              Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab.
              Projeto desenvolvido em React abordando todos os tópicos vistos durante a aula (Componentes, Props,
              Estados, Listas e Keys, Hooks, onChange e onClick, Context API em React, React Router DOM
              imagens e modularização do CSS, TDD).
            </p>
          </div>
        </div>
      </header> 
    </div>
  );
}

export default Banner;

