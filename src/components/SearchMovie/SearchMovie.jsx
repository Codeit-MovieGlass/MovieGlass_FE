import PropTypes from 'prop-types';
import { SearchMovieData } from './Mock/SearchMovieData';
import * as S from './SearchMovie.styled';

const SearchMoive = ({ keyword }) => {
  console.log(SearchMovieData);

  return (
    <>
      <S.SearchMovieContainer>
        <S.SearchMovieHeaderContainer>
          <S.SearchMoiveTitleContainer>
            <S.SearchMovieKeyword>‘{keyword}’</S.SearchMovieKeyword>
            <S.SearchMovieTitle>에 대한 검색 내용이에요</S.SearchMovieTitle>
          </S.SearchMoiveTitleContainer>
        </S.SearchMovieHeaderContainer>
        <S.SearchMoviePosterContainer>
          {SearchMovieData.map((movie, index) => (
            <S.SearchMoviePoster key={index} Url={movie.posterImgURL} />
          ))}
        </S.SearchMoviePosterContainer>
      </S.SearchMovieContainer>
    </>
  );
};

SearchMoive.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default SearchMoive;
