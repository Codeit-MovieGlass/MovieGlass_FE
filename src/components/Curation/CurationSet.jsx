import Curation from '@components/Curation/Curation';
import * as S from './CurationSet.styled';
import TextBalloon from '@components/Balloon/TextBalloon';
import EmojiBalloon from '@components/Balloon/EmojiBalloon';

const CurationSet = () => {
  return (
    <>
      <S.EmojiCurationContainer>
        <TextBalloon />
        <EmojiBalloon />
      </S.EmojiCurationContainer>
      <Curation />
      <Curation />
    </>
  );
};

export default CurationSet;
