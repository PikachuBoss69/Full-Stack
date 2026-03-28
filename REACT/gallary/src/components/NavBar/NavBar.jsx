import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <div className={styles.heading}>
            <h2>GALLARY</h2>
        </div>
        <div className={styles.components}>
        <a className={styles.component} href='#'>Home</a>
        <a className={styles.component} href='#'>Conatct</a>
        <a className={styles.component} href='#'>Product</a>
        <a className={styles.component} href='#'>Images</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
