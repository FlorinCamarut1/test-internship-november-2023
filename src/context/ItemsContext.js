import { createContext, useContext, useEffect, useReducer } from 'react';
import { ItemsReducer, initialState } from '../reducers/ItemsReducer';
const getNewDate = new Date();
const fullDate = `${getNewDate.getDate()} ${getNewDate.toLocaleString(
  'default',
  { month: 'long' }
)} ${getNewDate.getFullYear()} /${getNewDate.getHours()}:${getNewDate.getMinutes()}`;

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [
    {
      data,
      search,
      localData,
      currentItem,
      modalOpen,
      openData,
      error,
      isLoading,
    },
    dispatch,
  ] = useReducer(ItemsReducer, initialState);

  useEffect(() => {
    localData.map((item) =>
      item.name === currentItem
        ? dispatch({ type: 'setModalData', payload: item.data })
        : ''
    );
  }, [currentItem, localData]);

  const searchWord = (e) => {
    dispatch({ type: 'search', payload: e.target.value });
  };
  const closeHandler = (id) => {
    dispatch({ type: 'deleteItem', payload: id });
  };

  const currentItemHandler = (id) => {
    dispatch({ type: 'selectedItem', payload: id });
    dispatch({ type: 'modalState' });
  };
  const closeModal = () => {
    dispatch({ type: 'modalState' });
  };
  async function apiCall() {
    dispatch({ type: 'loading', payload: true });
    if (search.length === 0) return;
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Could not fetch data from server!!!');
      }

      const data = await response.json();
      dispatch({ type: 'data', payload: data });

      dispatch({
        type: 'updateLocalData',
        payload: {
          name: search,
          data,
          date: fullDate,
        },
      });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
    } finally {
      dispatch({ type: 'loading', payload: false });
    }
  }

  return (
    <ItemsContext.Provider
      value={{
        apiCall,
        search,
        searchWord,
        localData,
        closeHandler,
        currentItemHandler,
        modalOpen,
        openData,
        data,
        closeModal,
        error,
        isLoading,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => {
  const value = useContext(ItemsContext);
  if (value === null) throw new Error('useContext used outside provider!');
  return value;
};

export { ItemsProvider, useItems };
