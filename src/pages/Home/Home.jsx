import PropTypes from 'prop-types';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';

import { CurationData } from '@components/Curation/Mock/CurationData';

import * as S from './Home.styled';
import SearchMoive from '@components/SearchMovie/SearchMovie';

const Home = ({ keyword }) => {
  return (
    <S.HomeContatiner>
      {keyword === '' ? <TopTenList /> : <></>}
      <S.CurationWrapper>
        <BallonSection />
        <Curation curationTitle={CurationData.curationTitle} movieList={CurationData.movieList} />
      </S.CurationWrapper>
    </S.HomeContatiner>
  );
};

Home.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default Home;
