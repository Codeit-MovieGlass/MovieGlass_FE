import * as S from './Balloon.styled';
import * as B from '@icons/Balloon';

const EmojiBalloon = () => {
  return (
    <S.BalloonContainer>
      <B.EmojiBalloonIcon />
      <S.BalloonEmojiList>
        <S.LoveEmoji />
        <S.SosoEmoji />
        <S.SadEmoji />
        <S.HappyEmoji />
        <S.ToughEmoji />
      </S.BalloonEmojiList>
    </S.BalloonContainer>
  );
};

export default EmojiBalloon;
