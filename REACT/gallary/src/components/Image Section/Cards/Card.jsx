import React from 'react';
import styles from './Card.module.css';

function Card({setSelectedId, id, author, image, url}) {

  function giveId(){
    setSelectedId(id);
  }

  return (
    <div className={styles.container}>
      <a href={url}>
        <img  className={styles.image} src={image} alt="img"/>
      </a>
        <div  onClick={giveId} className={styles.tag}>
          <h3 className={styles.tagHeading}>{author}</h3>
        </div>
    </div>
  );
}

export default Card;
