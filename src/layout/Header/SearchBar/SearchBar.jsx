import * as M from '@icons/Magnifier';

import * as S from './SearchBar.styled';

const SearchBar = () => {
  return (
    <S.SearchBarForm>
      <S.SearchInput type="text" placeholder="제목, 인물, 장르를 검색하세요!" />
      <S.SearchButton>
        <M.Magnifier />
      </S.SearchButton>
    </S.SearchBarForm>
  );
};

export default SearchBar;
