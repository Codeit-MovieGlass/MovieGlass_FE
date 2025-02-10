import { HomeIcon } from '@icons/HomeIcon';
import * as S from './SearchMovie.styled';

const BackToHome = () => {
  const onClickBackToHome = () => {
    window.location.reload();
  };

  return (
    <S.BackToHomeDiv onClick={onClickBackToHome}>
      <HomeIcon />
      <S.BackToHome>&nbsp;메인으로</S.BackToHome>
    </S.BackToHomeDiv>
  );
};

export default BackToHome;
