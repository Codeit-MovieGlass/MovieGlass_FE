import EmojiBalloon from './Emoji/EmojiBalloon';
import TextBalloon from './Text/TextBalloon';

import * as S from './BalloonSection.styled';

const BallonSection = () => {
  return (
    <S.BalloonWrapper>
      <TextBalloon />
      <EmojiBalloon />
    </S.BalloonWrapper>
  );
};

export default BallonSection;
