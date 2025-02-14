import PropTypes from 'prop-types';

import { EmojiBalloonIcon } from '@icons/Balloon';

import * as S from './EmojiBalloon.styled';

const EmojiBalloon = ({ selectedEmoji, setSelectedEmoji }) => {
  const emojiList = [
    {
      emoji_KO: '사랑',
      emoji_EN: 'love',
    },
    {
      emoji_KO: '평온',
      emoji_EN: 'soso',
    },
    {
      emoji_KO: '눈물',
      emoji_EN: 'sad',
    },
    {
      emoji_KO: '웃음',
      emoji_EN: 'happy',
    },
    {
      emoji_KO: '긴장',
      emoji_EN: 'tough',
    },
  ];

  const handleEmojiClick = (emoji) => setSelectedEmoji(emoji);

  return (
    <S.EmojiBalloonContainer>
      <EmojiBalloonIcon />
      <S.BalloonEmojiList>
        {selectedEmoji === '' ? (
          <>
            {emojiList.map((emoji) => (
              <S.BalloonEmojiListItem key={emoji.emoji_KO}>
                <S.EmojiButton onClick={() => handleEmojiClick(emoji.emoji_KO)}>
                  <S.Emoji src={`/emoji/${emoji.emoji_EN}.svg`} />
                </S.EmojiButton>
              </S.BalloonEmojiListItem>
            ))}
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
