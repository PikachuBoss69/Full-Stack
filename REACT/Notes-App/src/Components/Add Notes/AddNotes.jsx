import React, { useState } from 'react';
import styles from './AddNotes.module.css';

function AddNotes({setNotes}) {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  
  function submithandler(e){
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      heading,
      content
};
    setNotes(prev => [...prev, newNote]);

    setHeading("");
    setContent("");
  }

  return (
    <div className={styles.container}>
        <form className={styles.form}
        onSubmit={(e) => submithandler(e)}>
            <h2 className={styles.heading}>Add Notes</h2>
            <input className={styles.notesHeading} type='text' placeholder='Enter Notes Heading' value={heading} onChange={(e) => setHeading(e.target.value)} />

            <textarea className={styles.notesContent} placeholder='Write Details' value={content} onChange={(e) => setContent(e.target.value)} />

            <button className={styles.addBtn}type='submit' >Add Note</button>
        </form>
    </div>
  );
}

export default AddNotes;
