import { useState } from 'react';
import Searchbar from 'components/Searchbar';

export const Movies = () => {
  const [search, setSearch] = useState('');

  return <Searchbar onSubmit={setSearch} />;
};
