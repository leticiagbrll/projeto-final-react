import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-information"><b>Criado por:</b> Letícia Souza</div>
            <div className="social-media">
                <ul>
                    <li>
                        <a href="mailto:leticisouza@usp.br" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/legbrll" target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/leticiagbrll" target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/leticia-gabrielle-de-assis-souza-5163b71b8/" target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copyright"> Copyright &copy; 2024 </div>
        </footer>
    );
}

export default Footer;
