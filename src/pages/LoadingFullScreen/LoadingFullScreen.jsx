import Loading from '@components/Loading/Loading';

import * as S from './LoadingFullScreen.styled';

const LoadingFullScreen = () => {
  return (
    <S.LoadingFullScreenContainer>
      <Loading />
    </S.LoadingFullScreenContainer>
  );
};

export default LoadingFullScreen;
