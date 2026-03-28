import React from 'react';
import styles from './Product.module.css';

function Product() {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.heading}>Our Features</h1>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <h3>Image API</h3>
          <p>Dynamic images fetched from external API.</p>
        </div>

        <div className={styles.card}>
          <h3>Pagination</h3>
          <p>Navigate through multiple pages easily.</p>
        </div>

        <div className={styles.card}>
          <h3>Profile View</h3>
          <p>See details of selected creators.</p>
        </div>

        <div className={styles.card}>
          <h3>Routing</h3>
          <p>Multi-page navigation using React Router.</p>
        </div>

      </div>

    </div>
  );
}

export default Product;