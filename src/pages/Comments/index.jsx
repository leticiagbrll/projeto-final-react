import React, { useEffect, useRef, useState } from 'react';
import { FiTrash2, FiPlus } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import fotoComentarios from '../../assets/fotoComentarios.svg';
import Typed from 'typed.js';
import styles from './Comentarios.module.css';

const Comentarios = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['deixe-um-comentario'],
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

    const getLocalList = () => {
        let items = localStorage.getItem('list');

        if (items) {
            return JSON.parse(localStorage.getItem('list'));
        } else {
            return [];
        }
    };

    const [list, setList] = useState(getLocalList);
    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask() {
        const task = {
            id: nanoid(),
            title: newTask,
            isComplete: false
        };

        if (task.title === '') {
            return;
        }

        setList([...list, task]);
        setNewTask('');
    }

    function handleRemoveTask(id) {
        const tasksFiltered = list.filter(task => task.id !== id);
        setList(tasksFiltered);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

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
            <div className={`${styles.fotoComentario} ${styles.imgComentario}`}>
                <img src={fotoComentarios} alt="Seção de Comentários" />
            </div>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder=".digite-aqui"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />
                <div className={styles.addContainer}>
                    <button className={styles.addTask} type="submit" onClick={handleCreateNewTask}>
                        <FiPlus size={16} color="#fff"/>
                    </button>
                </div>
            </div>
            <main>
                <ul className={styles.listItems}>
                    {list.map(task => (
                        <li key={task.id}>
                            <div>
                                <p>{task.title}</p>
                            </div>
                            <button className={styles.removeTask} type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
                                <FiTrash2 size={16}/>
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Comentarios;