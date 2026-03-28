import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import NavBar2 from './NavBar2';
function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <div className={styles.heading}>
            <h2>GALLARY</h2>
        </div>
        <div className={styles.components}>
        <Link className={styles.component} to='/'>Home</Link>
        <Link className={styles.component} to='/about'>About</Link>
        <Link className={styles.component} to='/product'>Product</Link>
        <Link className={styles.component} to='/images'>Images</Link>
        </div>
        <NavBar2/>
      </nav>
    </div>
  );
}

export default NavBar;
