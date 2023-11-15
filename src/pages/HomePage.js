import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FormHomePage from '../components/FormHomePage';
import { useState } from 'react';

function HomePage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [localData, setLocalData] = useState([]);

  const searchWord = (e) => {
    setSearch(e.target.value);
  };
  const getLocalHostData = () => {
    const local = localStorage.getItem(search);
    const parseLocalData = JSON.parse(local);
    setLocalData((prevdata) => [...prevdata, parseLocalData]);
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

    localStorage.setItem(
      search,
      JSON.stringify({
        name: search,
        data,
        date: new Date().getDate(),
        hour: new Date().getHours(),
      })
    );
  }

  return (
    <div>
      <Navigation />
      <FormHomePage
        onGetData={apiCall}
        search={search}
        searchWord={searchWord}
        getLocalHostData={getLocalHostData}
        localData={localData}
      />
      <Footer />
    </div>
  );
}

export default HomePage;