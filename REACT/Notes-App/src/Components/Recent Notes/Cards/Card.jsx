import React from 'react';
import styles from './Card.module.css';

function Card({heading, content, onDelete}) {
  return (
    <div className={styles.card}>
      
      <div className={styles.content}>

        <h2 className={styles.heading}>{heading || "No Title"}</h2>
        <p className={styles.para}>{content || "No Content"}</p>
      </div>
      <button className={styles.cross} onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Card;
