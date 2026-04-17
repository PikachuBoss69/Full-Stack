import React from 'react';
import styles from './Pagination.module.css';

function Pagination({ index, setIndex }) {

  const handlePrev = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <div className={styles.container}>
      
      <button
        onClick={handlePrev}
        className={styles.button}
        disabled={index === 1}
      >
        Prev
      </button>

      <span className={styles.page}>
        Page {index}
      </span>

      <button
        onClick={handleNext}
        className={styles.button}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;