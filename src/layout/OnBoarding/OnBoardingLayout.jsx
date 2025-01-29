import { Outlet } from 'react-router';

import Welcome from './Welcome/Welcome';

import * as S from './OnBoardingLayout.styled';

const OnBoardingLayout = () => {
  return (
    <S.OnBoardingLayoutContainer>
      <Welcome />
      <Outlet />
    </S.OnBoardingLayoutContainer>
  );
};

export default OnBoardingLayout;
