import { useState } from 'react';

import useAuth from '@hooks/auth/useAuth';

import SearchBar from './SearchBar/SearchBar';
import UserMenuDropdown from '@components/UserMenuDropdown/UserMenuDropdown';

import * as L from '@icons/Logo';
import * as M from '@icons/Magnifier';

import * as S from './Header.styled';

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logos href="/browse">
        <L.LogoSymbol />
        <L.LogoTypo />
      </S.Logos>
      <S.SearchProfile>
        <SearchBar />
        <M.MagnifierSolo />
        <S.ProfileButton onClick={handleProfileClick}>
          <S.DefaultProfile />
          {isDropdownOpen && <UserMenuDropdown handleLogout={handleLogout} />}
        </S.ProfileButton>
      </S.SearchProfile>
    </S.HeaderContainer>
  );
};

export default Header;
