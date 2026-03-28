import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      
      <section className={styles.hero}>
        <h1>Welcome to Your Gallery App</h1>
        <p>Explore images, profiles, and more with smooth navigation.</p>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Explore Images</h3>
          <p>Browse high-quality images with pagination.</p>
        </div>

        <div className={styles.card}>
          <h3>User Profiles</h3>
          <p>Click on any image to view creator details.</p>
        </div>

        <div className={styles.card}>
          <h3>Fast Navigation</h3>
          <p>Seamless routing between pages.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;