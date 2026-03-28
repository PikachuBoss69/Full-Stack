import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.container}>
      <a href="#">
        <img className={styles.image} src='https://images.unsplash.com/photo-1773332611514-238856b76198?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' alt="Image"/>
      </a>
        <div className={styles.tag}>
          <h3 className={styles.tagHeading}>Patrik</h3>
        </div>
    </div>
  );
}

export default Card;
