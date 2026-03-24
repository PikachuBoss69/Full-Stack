import React from 'react';
import styles from './AddNotes.module.css';

function AddNotes() {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <h2 className={styles.heading}>Add Notes</h2>
            <input className={styles.notesHeading} type='text' placeholder='Enter Notes Heading'></input>
            <textarea className={styles.notesContent} placeholder='Write Details'></textarea>
            <button className={styles.addBtn}>Add Note</button>
        </form>
    </div>
  );
}

export default AddNotes;
