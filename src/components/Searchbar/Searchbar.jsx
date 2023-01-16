import { useState } from 'react';
import {
  StyledInput,
  StyledSearchbar,
  StyledSubmitBtn,
} from './Searchbar.styled';

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const handlerInputChange = evt => {
    const query = evt?.target.value || '';
    setSearch(query);
  };

  return (
    <StyledSearchbar>
      <StyledInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        title="field for entering search query"
        value={search}
        onChange={handlerInputChange}
        required
      />
      <StyledSubmitBtn type="submit" disabled={!search} />
    </StyledSearchbar>
  );
};

export default Searchbar;
