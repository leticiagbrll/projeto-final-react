import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import contatoImage from '../../assets/contactMe.svg';
import Typed from 'typed.js';
import styles from './Contato.module.css';

function Contato() {
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['fale-comigo'],
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
    }, []);

    const handleInputValueMensagem = (event) => {
        setMensagem(event.target.value);
    };

    const handleInputValueNome = (event) => {
        setNome(event.target.value);
    };

    const handleInputValueEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePreencherEndereco = async (cep) => {
        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${cep}/json`);
            if (response.data && response.data.logradouro) {
                setEndereco(response.data.logradouro);
            }
        } catch (error) {
            console.error('Erro ao buscar o endereço:', error);
        }
    };

    const handleCreateMessage = (event) => {
        event.preventDefault();

        const messageData = {
            textMessage: mensagem,
            email: email,
            nome: nome,
            endereco: endereco,
        };

        setMensagem('');
        setNome('');
        setEmail('');
        setCep('');
        setEndereco('');
    };

    const aoDigitarNoCampo = (evento) => {
        const valorDigitado = evento.target.value;
        setCep(valorDigitado);
        handlePreencherEndereco(valorDigitado);
    };

    return (
        <>
            <div className={styles.header}>
                <h1 className={`${styles.typingEffect} ${styles.tag}`}>
                    <span>&#123;</span>
                    <span className={styles.title} ref={typedRef}></span>
                    <span className={styles.cursor}></span>
                    <span>&#125;</span>
                </h1>
            </div>
            <div className={`${styles.fotoComentario} ${styles.imgComentario}`}>
                <img src={contatoImage} alt="Seção de Contato" />
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleCreateMessage} className={styles.form}>
                    <input className={styles.formInput} required placeholder=".nome" onChange={handleInputValueNome} value={nome} />
                    <input className={styles.formInput} required placeholder=".e-mail" onChange={handleInputValueEmail} value={email} />
                    <input
                        className={styles.formInput}
                        id='cepInput'
                        onChange={aoDigitarNoCampo}
                        required
                        placeholder=".cep"
                        value={cep}
                        maxLength={8}
                    />
                    <input
                        className={styles.formInput}
                        id='enderecoInput'
                        value={endereco}
                        placeholder=".endereco"
                        readOnly
                    />
                    <textarea className={styles.formTextArea} required placeholder=".digite-sua-mensagem" onChange={handleInputValueMensagem} value={mensagem} />
                    <button className={styles.formButton} type="submit">enviar-mensagem</button>
                </form>
            </div>
        </>
    );
}

export default Contato;
