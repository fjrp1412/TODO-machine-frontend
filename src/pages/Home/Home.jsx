import React, { useState } from 'react';
import { HomeUI } from './HomeUI';

const Home = () => {
  const [query, setQuery] = useState({});
  const handleChangeQuery = field => {
    setQuery({ ...query, [field]: !query[field] });
  };
  return <HomeUI query={query} handleChangeQuery={handleChangeQuery} />;
};

export { Home };
