import React from 'react';
import styles from './LeftContent.module.css';
import { ArrowUpRight } from 'lucide-react';

function LeftContent() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.heading}>PERSPECTIVE
        <br/>
        <span className={styles.specialHeading}>CUSTOMER</span>
        <br/>
        SEGMENTATION
        </h2>
        <p className={styles.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dignissimos, culpa placeat nesciunt numquam consequatur ea omnis explicabo, reprehenderit amet cupiditate cumque ducimus nostrum doloremque hic itaque adipisci ratione voluptates?</p>
      </div>
      <div className={styles.arrow}>
        <ArrowUpRight />
      </div>
    </div>
  );
}

export default LeftContent;
