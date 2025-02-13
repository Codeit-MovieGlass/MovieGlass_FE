import PropTypes from 'prop-types';

import { EmojiBalloonIcon } from '@icons/Balloon';

import * as S from './EmojiBalloon.styled';

const EmojiBalloon = ({ selectedEmoji, setSelectedEmoji }) => {
  // 사랑, 평온, 눈물, 웃음, 긴장
  const handleEmojiClick = (emoji) => setSelectedEmoji(emoji);

  return (
    <S.EmojiBalloonContainer>
      <EmojiBalloonIcon />
      <S.BalloonEmojiList>
        {selectedEmoji === '' ? (
          <>
            <S.LoveEmoji onClick={() => handleEmojiClick('사랑')} />
            <S.SosoEmoji onClick={() => handleEmojiClick('평온')} />
            <S.SadEmoji onClick={() => handleEmojiClick('눈물')} />
            <S.HappyEmoji onClick={() => handleEmojiClick('웃음')} />
            <S.ToughEmoji onClick={() => handleEmojiClick('긴장')} />
          </>
        ) : (
          <>
            {selectedEmoji === '사랑' && <S.LoveEmoji />}
            {selectedEmoji === '평온' && <S.SosoEmoji />}
            {selectedEmoji === '눈물' && <S.SadEmoji />}
            {selectedEmoji === '웃음' && <S.HappyEmoji />}
            {selectedEmoji === '긴장' && <S.ToughEmoji />}
          </>
        )}
      </S.BalloonEmojiList>
    </S.EmojiBalloonContainer>
  );
};

EmojiBalloon.propTypes = {
  selectedEmoji: PropTypes.any.isRequired,
  setSelectedEmoji: PropTypes.any.isRequired,
};

export default EmojiBalloon;
