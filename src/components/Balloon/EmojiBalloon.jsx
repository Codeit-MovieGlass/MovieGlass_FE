import * as S from './Balloon.styled';
import * as B from '@icons/Balloon';

const EmojiBalloon = () => {
  return (
    <S.EBalloonContainer>
      <B.EmojiBalloonIcon />
      <S.BalloonEmojiList>
        <S.LoveEmoji />
        <S.SosoEmoji />
        <S.SadEmoji />
        <S.HappyEmoji />
        <S.ToughEmoji />
      </S.BalloonEmojiList>
    </S.EBalloonContainer>
  );
};

export default EmojiBalloon;
