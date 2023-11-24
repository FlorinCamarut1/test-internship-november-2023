import { createContext, useContext, useEffect, useState } from 'react';

const getNewDate = new Date();
const fullDate = `${getNewDate.getDate()} ${getNewDate.toLocaleString(
  'default',
  { month: 'long' }
)} ${getNewDate.getFullYear()} /${getNewDate.getHours()}:${getNewDate.getMinutes()}`;

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [localData, setLocalData] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [openData, setOpenData] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    localData.map((item) =>
      item.name === currentItem ? setOpenData(JSON.stringify(item.data)) : ''
    );
  }, [currentItem, localData]);

  const searchWord = (e) => {
    setSearch(e.target.value);
  };
  const closeHandler = (id) => {
    setLocalData(localData.filter((item) => item.name !== id));
  };

  const currentItemHandler = (id) => {
    setCurrentItem(id);
    setModalOpen((modal) => !modal);
  };
  const closeModal = () => {
    setModalOpen((modal) => !modal);
  };
  async function apiCall() {
    setIsLoading(true);
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
      setData(data);

      setLocalData((prevData) => [
        ...prevData,
        {
          name: search,
          data,
          date: fullDate,
        },
      ]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
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
