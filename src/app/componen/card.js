// Card.js
import React from 'react';
import styles from '../componen/stylemodule/card.module.css'; // Path corrected

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} /> {/* added `alt` */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a href={link} className={styles.cardLink}>Baca Selengkapnya</a>
      </div>
    </div>
  );
};

export default Card;
