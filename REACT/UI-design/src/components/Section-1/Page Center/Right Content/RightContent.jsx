import React from 'react';
import styles from './RightContent.module.css';
import Card from './Cards/Card'

function RightContent(proto) {
  return (
    <div className={styles.container}>
        {proto.users.map(function(elem,id){ 
            return(<Card img={elem.img} info ={elem.info} tag={elem.tag} id={id+1}/>
            );
        }
        )}
      
    </div>
  );
}

export default RightContent;
