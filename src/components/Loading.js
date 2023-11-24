import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import styles from './Loading.module.css';
function Loading() {
  return (
    <div className={styles.container}>
      <BarLoader />
    </div>
  );
}

export default Loading;
