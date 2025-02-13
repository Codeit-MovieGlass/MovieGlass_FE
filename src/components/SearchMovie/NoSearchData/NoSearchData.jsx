import PropTypes from 'prop-types';

import BackToHomeOrMyPage from '@components/BackToHomeOrMyPage/BackToHomeOrMyPage';

import * as S from './NoSearchData.styled';

const NoSearchData = ({ query }) => {
  return (
    <S.NoSearchDataContainer>
      <S.SearchMovieText>
        <span className="query">‘{query}’</span> 에 대한 검색 내용이 없습니다. <br />
        다른 단어로 검색해보세요.
      </S.SearchMovieText>

      {/* 메인으로 */}
      <BackToHomeOrMyPage type="home" />
    </S.NoSearchDataContainer>
  );
};

NoSearchData.propTypes = { query: PropTypes.string.isRequired };

export default NoSearchData;
