import * as B from '@icons/Balloon';

import * as S from './TextBalloon.styled';

const TextBalloon = () => {
  return (
    <S.TextBalloonContainer>
      <S.BallonText>어떤 기분의 영화를 보고 싶으신가요?</S.BallonText>
      <B.MessageBalloonIcon />
    </S.TextBalloonContainer>
  );
};

export default TextBalloon;
