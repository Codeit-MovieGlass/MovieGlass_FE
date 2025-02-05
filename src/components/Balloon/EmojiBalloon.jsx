import { useState } from 'react';
import * as S from './Balloon.styled';
import * as B from '@icons/Balloon';

const EmojiBalloon = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <S.EBalloonContainer>
      <B.EmojiBalloonIcon />
      <S.BalloonEmojiList>
        {selectedEmoji === null ? (
          <>
            <S.LoveEmoji onClick={() => handleEmojiClick('love')} />
            <S.SosoEmoji onClick={() => handleEmojiClick('soso')} />
            <S.SadEmoji onClick={() => handleEmojiClick('sad')} />
            <S.HappyEmoji onClick={() => handleEmojiClick('happy')} />
            <S.ToughEmoji onClick={() => handleEmojiClick('tough')} />
          </>
        ) : (
          <>
            {selectedEmoji === 'love' && <S.LoveEmoji />}
            {selectedEmoji === 'soso' && <S.SosoEmoji />}
            {selectedEmoji === 'sad' && <S.SadEmoji />}
            {selectedEmoji === 'happy' && <S.HappyEmoji />}
            {selectedEmoji === 'tough' && <S.ToughEmoji />}
          </>
        )}
      </S.BalloonEmojiList>
    </S.EBalloonContainer>
  );
};

export default EmojiBalloon;
