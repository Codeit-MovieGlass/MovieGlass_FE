import { useState } from 'react';

import SearchBar from './SearchBar/SearchBar';
import UserMenuDropdown from '@components/UserMenuDropdown/UserMenuDropdown';

import * as L from '@icons/Logo';
import * as M from '@icons/Magnifier';

import * as S from './Header.styled';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logos>
        <L.LogoSymbol />
        <L.LogoTypoSerif />
      </S.Logos>
      <S.SearchProfile>
        <SearchBar />
        <M.MagnifierSolo />
        <S.ProfileButton onClick={handleProfileClick}>
          <S.DefaultProfile />
          {isDropdownOpen && <UserMenuDropdown />}
        </S.ProfileButton>
      </S.SearchProfile>
    </S.HeaderContainer>
  );
};

export default Header;
