import React from 'react';
import { useItems } from '../context/ItemsContext';
import styles from './Error.module.css';
function Error() {
  const { error } = useItems();
  return (
    <div className={styles.container}>
      <h1>{error} ⛔</h1>
    </div>
  );
}

export default Error;
