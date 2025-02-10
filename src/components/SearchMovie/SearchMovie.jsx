import PropTypes from 'prop-types';
import { SearchMovieData } from './Mock/SearchMovieData';
import BackToHome from './BackToHome';
import * as S from './SearchMovie.styled';

const SearchMoive = ({ keyword }) => {
  console.log(SearchMovieData);

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
          {SearchMovieData.map((movie, index) => (
            <S.SearchMoviePoster key={index} Url={movie.posterImgURL} />
          ))}
        </S.SearchMoviePosterDiv>
      </S.SearchMovieContainer>
    </>
  );
};

SearchMoive.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default SearchMoive;
