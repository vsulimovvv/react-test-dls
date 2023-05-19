import React, { useState } from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <Posts search={search} />
    </>
  );
}

export default App;
