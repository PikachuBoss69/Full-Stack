import React from 'react';
import styles from './RecentNotes.module.css';
import Card from './Cards/Card';

function RecentNotes({notes, onDelete}) {
  return (
    <div className={styles.container}>
    
        <h2 className={styles.heading}>
            Recent Notes
        </h2>
        <div className={styles.card}>
            {notes.map((notes) => {
              return (
                  <Card key={notes.id} 
                  heading={notes.heading}
                  content={notes.content}
                  onDelete={()=> onDelete(notes.id)} />
                   
                  );
            })
            }
        </div>
      </div>
  );
}

export default RecentNotes;
