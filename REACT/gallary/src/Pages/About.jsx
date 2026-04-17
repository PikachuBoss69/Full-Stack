import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      
      <h1>About This Project</h1>

      <p className={styles.text}>
        This is a React-based gallery application built to practice modern frontend concepts 
        like routing, API integration, pagination, and component-based architecture.
      </p>

      <div className={styles.section}>
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>CSS Modules</li>
        </ul>
      </div>

    </div>
  );
}

export default About;