import React from 'react';
import styles from './Modal.module.css';
import { useItems } from '../context/ItemsContext';
function Modal() {
  const { openData, closeModal } = useItems();
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.btnContainer}>
          <button className={styles.closeBtn} onClick={closeModal}>
            ❌
          </button>
        </div>
        <p>{openData}</p>
      </div>
    </div>
  );
}

export default Modal;
