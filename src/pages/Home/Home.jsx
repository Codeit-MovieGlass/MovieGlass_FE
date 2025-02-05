import CurationSet from '@components/Curation/CurationSet';
import TopTenList from '@components/TopTenList/TopTenList';
import PropTypes from 'prop-types';
import * as S from './Home.styled';
import SearchMoive from '@components/SearchMovie/SearchMovie';

const Home = ({ keyword }) => {
  return (
    <S.HomeContatiner>
      {keyword === '' ? (
        <>
          <TopTenList />
          <CurationSet />
        </>
      ) : (
        <SearchMoive keyword={keyword} />
      )}
    </S.HomeContatiner>
  );
};

Home.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default Home;
