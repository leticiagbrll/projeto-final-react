import styles from './Menu.module.css'

import { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";



const Menu = (props) => {
    const [open, setOpen] = useState(false)

    function handleMenu() {
        open ? setOpen(false) : setOpen(true)
    }

    return(
        <nav>
            <List size={32} onClick={handleMenu} className={styles.hamburguer} />
            <ul className={open ? styles.hamburguerOpen : styles.menu}>
                <li className={open ? styles.linkOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/">.início</Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/about">.sobre</Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/comments">.comentarios</Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/talk">.fale-comigo</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;