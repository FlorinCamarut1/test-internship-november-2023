import React from 'react';
import TableRow from './TableRow';
import styles from './FormHomePage.module.css';
import { useItems } from '../context/ItemsContext';
import Loading from './Loading';
import Error from './Error';
function FormHomePage() {
  const {
    apiCall,
    searchWord,
    localData,
    closeHandler,
    currentItemHandler,
    search,
    isLoading,
    error,
  } = useItems();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  if (isLoading) return <Loading />;
  if (error) return <Error />;
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
        <button type='submit' onClick={apiCall}>
          Search word
        </button>
      </form>
      <div className={styles.container}>
        {localData.map((item) => (
          <TableRow
            localData={item}
            key={item.name}
            id={item.name}
            onCloseHandler={closeHandler}
            onCurrentSelected={currentItemHandler}
          />
        ))}
      </div>
    </>
  );
}

export default FormHomePage;
