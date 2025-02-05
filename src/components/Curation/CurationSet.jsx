import Curation from '@components/Curation/Curation';

import { CurationData } from './Mock/CurationData';

import * as S from './CurationSet.styled';
import BallonSection from '@components/Balloon/BallonSection';

const CurationSet = () => {
  return (
    <S.CurationWrapper>
      <BallonSection />
      <Curation curationTitle={CurationData.curationTitle} movieList={CurationData.movieList} />
    </S.CurationWrapper>
  );
};

export default CurationSet;
