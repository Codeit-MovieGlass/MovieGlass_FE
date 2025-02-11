import * as M from '@icons/Magnifier';

import * as S from './SearchBar.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ setKeyword }) => {
  const [searchword, setSearchword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침) 방지
    setKeyword(searchword); // ✅ searchword를 setKeyword에 반영
  };

  return (
    <S.SearchBarForm onSubmit={handleSubmit}>
      <S.SearchInput
        value={searchword}
        onChange={(e) => setSearchword(e.target.value)}
        type="text"
        placeholder="제목, 인물, 장르를 검색하세요!"
      />
      <S.SearchButton type="submit">
        <M.Magnifier />
      </S.SearchButton>
    </S.SearchBarForm>
  );
};

SearchBar.propTypes = {
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
