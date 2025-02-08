import PropTypes from 'prop-types';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';

import { CurationData } from '@components/Curation/Mock/CurationData';

import * as S from './Home.styled';
import SearchMoive from '@components/SearchMovie/SearchMovie';
import { TopTenMovieList } from '@components/TopTenList/mock/TopTenMovieList';

const Home = ({ keyword }) => {
  return (
    <S.HomeContatiner>
      {keyword === '' ? (
        <>
          <TopTenList movieList={TopTenMovieList} />

          <S.CurationWrapper>
            <BallonSection />
            <Curation
              curationTitle={CurationData.curationTitle}
              movieList={CurationData.movieList}
            />
          </S.CurationWrapper>
        </>
      ) : (
        <S.SearchMovieWrapper>
          <SearchMoive keyword={keyword} />
          <Curation
            curationTitle={'비슷한 영화를 추천해드려요'}
            movieList={CurationData.movieList}
          />
        </S.SearchMovieWrapper>
      )}
    </S.HomeContatiner>
  );
};

Home.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default Home;
