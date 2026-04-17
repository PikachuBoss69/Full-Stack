import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      
      <h1 className={styles.code}>404</h1>
      
      <h2 className={styles.title}>Page Not Found</h2>
      
      <p className={styles.description}>
        The page you’re looking for doesn’t exist or was moved.
      </p>

      <div className={styles.actions}>
        <button className={styles.button} onClick={()=>{
            navigate('/')
        }}>
          Go Home
        </button>

        <button  className={styles.secondary}  onClick={()=>{
            navigate('/images')
        }}>
          Browse Images
        </button>
      </div>

    </div>
  );
}

export default NotFound;