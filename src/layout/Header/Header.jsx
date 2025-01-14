import SearchBar from './SearchBar/SearchBar';

import * as L from '@icons/Logo';
import * as M from '@icons/Magnifier';

import * as S from './Header.styled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logos>
        <L.LogoSymbol />
        <L.LogoTypo />
      </S.Logos>
      <S.SearchProfile>
        <SearchBar />
        <M.MagnifierSolo />
        <S.DefaultProfile />
      </S.SearchProfile>
    </S.HeaderContainer>
  );
};

export default Header;
