import * as S from './Loading.styled';

const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingBall>
        <S.BallInner />
      </S.LoadingBall>
      <S.LoadingBall>
        <S.BallInner className="inner" />
      </S.LoadingBall>
      <S.LoadingBall>
        <S.BallInner className="inner" />
      </S.LoadingBall>
    </S.LoadingContainer>
  );
};

export default Loading;
