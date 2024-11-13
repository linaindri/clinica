'use_client'
// components/Button.js
import styles from './stylemodule/button.module.css';
import Container from './container';

const Button = ({ children, state, size = 'medium', color = 'default', shape = 'rounded' }) => {
    return (
        <button
            className={`${styles.button} ${styles[size]} ${styles[color]} ${styles[shape]}`}
        >
            {children}
        </button>
    );
};

export default Button;
