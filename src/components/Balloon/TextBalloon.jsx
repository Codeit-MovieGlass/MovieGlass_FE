import * as S from './Balloon.styled';
import * as B from '@icons/Balloon';

const TextBalloon = () => {
  return (
    <S.BalloonContainer>
      <S.BallonText>
        <span>어떤 기분의 영화를 보고 싶으신가요?</span>
      </S.BallonText>
      <B.MessageBalloonIcon />
    </S.BalloonContainer>
  );
};

export default TextBalloon;
