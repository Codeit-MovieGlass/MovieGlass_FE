import { useState } from 'react';

import SearchBar from './SearchBar/SearchBar';
import UserMenuDropdown from '@components/UserMenuDropdown/UserMenuDropdown';

import * as L from '@icons/Logo';
import * as M from '@icons/Magnifier';

import * as S from './Header.styled';
import PropTypes from 'prop-types';

const Header = ({ setKeyword }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logos>
        <L.LogoSymbol />
        <L.LogoTypo />
      </S.Logos>
      <S.SearchProfile>
        <SearchBar setKeyword={setKeyword} />
        <M.MagnifierSolo />
        <S.ProfileButton onClick={handleProfileClick}>
          <S.DefaultProfile />
          {isDropdownOpen && <UserMenuDropdown />}
        </S.ProfileButton>
      </S.SearchProfile>
    </S.HeaderContainer>
  );
};

Header.propTypes = {
  setKeyword: PropTypes.func.isRequired,
};

export default Header;
