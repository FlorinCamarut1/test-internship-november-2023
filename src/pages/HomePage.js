import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FormHomePage from '../components/FormHomePage';
import { useState } from 'react';
import Modal from '../components/Modal';

const getNewDate = new Date();
const fullDate = `${getNewDate.getDate()} ${getNewDate.toLocaleString(
  'default',
  { month: 'long' }
)} ${getNewDate.getFullYear()} /${getNewDate.getHours()}:${getNewDate.getMinutes()}`;

function HomePage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [localData, setLocalData] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  const [modalOpen, setModalOpen] = useState(false);

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
  async function apiCall() {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
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
  }

  return (
    <div>
      <Navigation />
      {modalOpen && <Modal />}
      <FormHomePage
        onGetData={apiCall}
        search={search}
        searchWord={searchWord}
        localData={localData}
        onCloseHandler={closeHandler}
        onCurrentSelected={currentItemHandler}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
