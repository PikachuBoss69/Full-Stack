import React from 'react';
import styles from './ImageCompartment.module.css';
import Card from './Cards/Card';

function ImageCompartment({data, setSelectedId}) {
  return (
    <div className={styles.container}>
     {
       data.map(function(elem){
         return(
           <Card
            setSelectedId = {setSelectedId}
            key = {elem.id} 
            id = {elem.id}
            author={elem.author} 
            image={elem.download_url}
            url={elem.url}/>
          );
        })
      }
    </div>
  );
}

export default ImageCompartment;
