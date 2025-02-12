import PropTypes from 'prop-types';
import * as S from './SearchMovie.styled';
import BackToHome from './BackToHome';

const NoSearchData = ({ keyword }) => {
  return (
    <S.NoSearchDataContainer>
      <S.SearchMoiveTitleDiv>
        <S.SearchMovieKeyword>‘{keyword}’</S.SearchMovieKeyword>
        <S.SearchMovieTitle>에 대한 검색 내용이 없습니다.</S.SearchMovieTitle>
      </S.SearchMoiveTitleDiv>
      <S.SearchMovieTitle>다른 단어로 검색해보세요.</S.SearchMovieTitle>
      <S.NoSearchDataSpace />
      <BackToHome />
    </S.NoSearchDataContainer>
  );
};

NoSearchData.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default NoSearchData;
