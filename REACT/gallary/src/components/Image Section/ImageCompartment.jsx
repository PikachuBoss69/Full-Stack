import React from 'react';
import styles from './ImageCompartment.module.css';
import Card from './Cards/Card';

function ImageCompartment() {
  return (
    <div className={styles.container}>
      <Card/>
    </div>
  );
}

export default ImageCompartment;
