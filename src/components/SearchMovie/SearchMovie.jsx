import PropTypes from 'prop-types';
import BackToHome from './BackToHome';
import * as S from './SearchMovie.styled';

const SearchMoive = ({ keyword, searchData }) => {
  return (
    <>
      <S.SearchMovieContainer>
        <S.SearchMovieHeaderDiv>
          <S.SearchMoiveTitleDiv>
            <S.SearchMovieKeyword>‘{keyword}’</S.SearchMovieKeyword>
            <S.SearchMovieTitle>에 대한 검색 내용이에요</S.SearchMovieTitle>
          </S.SearchMoiveTitleDiv>
          <BackToHome />
        </S.SearchMovieHeaderDiv>
        <S.SearchMoviePosterDiv>
          {searchData.map((movie, index) => (
            <S.SearchMoviePoster key={index} Url={movie.poster_url} />
          ))}
        </S.SearchMoviePosterDiv>
      </S.SearchMovieContainer>
    </>
  );
};

SearchMoive.propTypes = {
  keyword: PropTypes.string.isRequired,
  searchData: PropTypes.any.isRequired,
};

export default SearchMoive;
