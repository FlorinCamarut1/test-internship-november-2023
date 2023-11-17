import React from 'react';
import styles from './TableRow.module.css';
function TableRow({ localData, id, onCloseHandler }) {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.table}>
          <li>
            <p>Word</p>
          </li>
          <li>
            <p>{localData?.name}</p>
          </li>
        </ul>
        <ul className={styles.table}>
          <li>
            <p>DateTime</p>
          </li>
          <li>
            <p>{localData?.date}</p>
          </li>
        </ul>
        <ul className={styles.table}>
          <li>
            <p>Actions</p>
          </li>
          <button onClick={() => onCloseHandler(id)}>❌</button>
        </ul>
      </div>
    </>
  );
}

export default TableRow;
