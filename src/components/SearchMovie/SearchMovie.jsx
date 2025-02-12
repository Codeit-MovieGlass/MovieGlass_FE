import PropTypes from 'prop-types';

import BackToHome from '@components/BackToHome/BackToHome';
import NoSearchData from './NoSearchData/NoSearchData';

import * as S from './SearchMovie.styled';

const SearchMovie = ({ keyword, searchData = [] }) => {
  return (
    <>
      {searchData.length === 0 ? (
        <NoSearchData keyword={keyword} />
      ) : (
        <S.SearchMovieContainer>
          {/* Header */}
          <S.SearchMovieHeader>
            <S.SearchMovieText>
              <span className="keyword">‘{keyword}’</span> 에 대한 검색 내용이에요
            </S.SearchMovieText>
            <BackToHome />
          </S.SearchMovieHeader>

          {/* Poster Grid */}
          <S.SearchMoviePosterSection>
            <S.SearchMoviePosterList>
              {searchData.map((movie, index) => (
                <S.SearchMoviePosterItem key={index}>
                  <S.SearchMoviePoster src={movie.poster_url} alt={`poster-${index}`} />
                </S.SearchMoviePosterItem>
              ))}
            </S.SearchMoviePosterList>
          </S.SearchMoviePosterSection>
          <S.SearchResultDivider />
        </S.SearchMovieContainer>
      )}
    </>
  );
};

SearchMovie.propTypes = {
  keyword: PropTypes.string.isRequired,
  searchData: PropTypes.array.isRequired,
};

export default SearchMovie;
