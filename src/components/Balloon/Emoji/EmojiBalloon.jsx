import { useState } from 'react';
import * as B from '@icons/Balloon';

import * as S from './EmojiBalloon.styled';

const EmojiBalloon = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <S.EmojiBalloonContainer>
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
    </S.EmojiBalloonContainer>
  );
};

export default EmojiBalloon;
