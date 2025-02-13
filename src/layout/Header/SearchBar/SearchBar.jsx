import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Magnifier } from '@icons/Magnifier';

import * as S from './SearchBar.styled';

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') navigate(`/search/?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <S.SearchBarForm onSubmit={handleSearch}>
      <S.SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="제목, 인물, 장르를 검색하세요!"
      />
      <S.SearchButton type="submit">
        <Magnifier />
      </S.SearchButton>
    </S.SearchBarForm>
  );
};

SearchBar.propTypes = {
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
