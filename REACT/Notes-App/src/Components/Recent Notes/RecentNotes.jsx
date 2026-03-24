import React from 'react';
import styles from './RecentNotes.module.css';
import Card from './Cards/Card';

function RecentNotes() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
            Recent Notes
        </h2>
        <div className={styles.card}>
            <Card/>
     
        </div>
      </div>
    </div>
  );
}

export default RecentNotes;
