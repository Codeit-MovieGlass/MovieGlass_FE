import { Outlet } from 'react-router';

import Header from './Header/Header';

import * as S from './Layout.styled';
import PropTypes from 'prop-types';

const Layout = ({ setKeyword }) => {
  return (
    <S.LayoutContainer>
      <Header setKeyword={setKeyword} />
      <Outlet />
    </S.LayoutContainer>
  );
};

Layout.propTypes = {
  setKeyword: PropTypes.func.isRequired,
};

export default Layout;
