import CurationSet from '@components/Curation/CurationSet';
import TopTenList from '@components/TopTenList/TopTenList';
import PropTypes from 'prop-types';
import * as S from './Home.styled';

const Home = ({ keyword }) => {
  return (
    <S.HomeContatiner>
      {keyword === '' ? <TopTenList /> : <></>}
      <CurationSet />
    </S.HomeContatiner>
  );
};

Home.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default Home;
