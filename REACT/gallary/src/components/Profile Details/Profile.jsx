import React from 'react';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.container}>
        <div className={styles.ProilfeName}>
            <h1 className={heading}>Patrik</h1>
        </div>
        <div className={styles.ProfileInformation}>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  );
}

export default Profile;
