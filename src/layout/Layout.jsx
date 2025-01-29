import { Outlet } from 'react-router';

import Header from './Header/Header';

import * as S from './Layout.styled';

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
};

export default Layout;
