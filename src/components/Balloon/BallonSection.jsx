import EmojiBalloon from './Emoji/EmojiBalloon';
import TextBalloon from './Text/TextBalloon';

import * as S from './BalloonSection.styled';
import PropTypes from 'prop-types';

const BallonSection = ({ selectedEmoji, setSelectedEmoji }) => {
  return (
    <S.BalloonWrapper>
      <TextBalloon />
      <EmojiBalloon selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
    </S.BalloonWrapper>
  );
};

BallonSection.propTypes = {
  selectedEmoji: PropTypes.any.isRequired,
  setSelectedEmoji: PropTypes.any.isRequired,
};

export default BallonSection;
