import './button.css';

const Botao = (props) => {
    return (
        <a href='https://www.pretalab.com/' target='_blank' rel='noopener noreferrer' className='botao'>
            {props.children}
        </a>
    );
};

export default Botao;
