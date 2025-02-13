import { HomeIcon } from '@icons/HomeIcon';

import * as S from './BackToHome.styled';

const BackToHome = () => {
  return (
    <S.BackToHomeLink href="/">
      <S.HomeIconBox>
        <HomeIcon />
      </S.HomeIconBox>
      <S.BackToHomeText>메인으로</S.BackToHomeText>
    </S.BackToHomeLink>
  );
};

export default BackToHome;
