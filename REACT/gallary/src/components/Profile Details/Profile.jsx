import React from 'react';
import styles from './Profile.module.css';

function Profile({ data, selectedId }) {
  const selectedUser = data.find((item) => item.id === selectedId);

  return (
    <div className={styles.container}>
      <div className={styles.ProilfeName}>
        <h2 className={styles.heading}>
          {selectedUser ? selectedUser.author : "Select a user"}
        </h2>
      </div>
    </div>
  );
}

export default Profile;
