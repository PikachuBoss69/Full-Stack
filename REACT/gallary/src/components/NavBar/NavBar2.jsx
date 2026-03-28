import React from 'react';
import styles from './NavBar2.module.css';
import { useNavigate } from 'react-router-dom';

function NavBar2() {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <div className={styles.buttons}>
            <button className={styles.btn} onClick={()=>{
                navigate(-1);
            }}>Prev</button>
            <button className={styles.btn} onClick={()=>{
                navigate(+1);
            }}>Next</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar2;
