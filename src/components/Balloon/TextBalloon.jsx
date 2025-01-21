import * as S from './Balloon.styled';
import * as B from '@icons/Balloon';

const TextBalloon = () => {
  return (
    <S.BalloonContainer>
      <S.BallonText>어떤 기분의 영화를 보고 싶으신가요?</S.BallonText>
      <B.MessageBalloonIcon />
    </S.BalloonContainer>
  );
};

export default TextBalloon;
