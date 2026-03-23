import React from 'react';
import styles from './Card.module.css';
import { ChevronRight } from 'lucide-react';


function Card(proto) {
  return (
    <div className={styles.card}>
            <img className={styles.image} src={proto.img} alt="Working Professional" />
            <div className={styles.container}>
                <h3 className={styles.upperNum}>{proto.id}</h3>
                <br/>
                <div className={styles.content}>
                    <p className={styles.para}>{proto.info}</p>
                    <div className={styles.btns}>
                        <button className={styles.btn}>{proto.tag}</button>
                        <button className={styles.btn}>  <ChevronRight /></button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Card;
