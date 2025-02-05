import TextBalloon from '@components/Balloon/TextBalloon';
import EmojiBalloon from '@components/Balloon/EmojiBalloon';
import Curation from '@components/Curation/Curation';

import { CurationData } from './Mock/CurationData';

import * as S from './CurationSet.styled';

const CurationSet = () => {
  return (
    <S.CurationWrapper>
      <S.EmojiCurationContainer>
        <TextBalloon />
        <EmojiBalloon />
      </S.EmojiCurationContainer>
      <Curation curationTitle={CurationData.curationTitle} movieList={CurationData.movieList} />
    </S.CurationWrapper>
  );
};

export default CurationSet;
