import * as S from './Header.styled';

import * as L from '@icons/Logo';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logos>
        <L.LogoSymbol />
        <L.LogoTypo />
      </S.Logos>
    </S.HeaderContainer>
  );
};

export default Header;
