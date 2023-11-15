import React from 'react';
import TableRow from './TableRow';
import styles from './FormHomePage.module.css';
function FormHomePage({
  onGetData,
  search,
  searchWord,
  getLocalHostData,
  localData,
}) {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>Search</label>
        <input
          value={search}
          type='text'
          maxLength={100}
          onChange={searchWord}
          required
        />
        <button type='submit' onClick={onGetData}>
          Search word
        </button>
      </form>
      <div className={styles.container}>
        {localData.map((item) => (
          <TableRow localData={item} />
        ))}

        <button onClick={getLocalHostData}>Get Local Search</button>
      </div>
    </>
  );
}

export default FormHomePage;