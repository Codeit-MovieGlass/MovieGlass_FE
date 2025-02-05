import * as M from '@icons/Magnifier';

import * as S from './SearchBar.styled';
import PropTypes from 'prop-types';

const SearchBar = ({ setKeyword }) => {
  return (
    <S.SearchBarForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.SearchInput
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="제목, 인물, 장르를 검색하세요!"
      />
      <S.SearchButton>
        <M.Magnifier />
      </S.SearchButton>
    </S.SearchBarForm>
  );
};

SearchBar.propTypes = {
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
