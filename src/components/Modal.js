import React from 'react';
import styles from './Modal.module.css';
function Modal({ onCloseModal, openData }) {
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.btnContainer}>
          <button className={styles.closeBtn} onClick={onCloseModal}>
            ❌
          </button>
        </div>
        <p>{openData}</p>
      </div>
    </div>
  );
}

export default Modal;
