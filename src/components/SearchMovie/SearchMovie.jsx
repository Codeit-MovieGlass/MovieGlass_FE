import PropTypes from 'prop-types';
import { SearchMovieData } from './Mock/SearchMovieData';
import * as S from './SearchMovie.styled';
import { HomeIcon } from '@icons/HomeIcon';

const SearchMoive = ({ keyword }) => {
  console.log(SearchMovieData);

  const onClickBackToHome = () => {
    window.location.reload();
  };

  return (
    <>
      <S.SearchMovieContainer>
        <S.SearchMovieHeaderDiv>
          <S.SearchMoiveTitleDiv>
            <S.SearchMovieKeyword>‘{keyword}’</S.SearchMovieKeyword>
            <S.SearchMovieTitle>에 대한 검색 내용이에요</S.SearchMovieTitle>
          </S.SearchMoiveTitleDiv>
          <S.BackToHomeDiv onClick={onClickBackToHome}>
            <HomeIcon />
            <S.BackToHome>&nbsp;메인으로</S.BackToHome>
          </S.BackToHomeDiv>
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
