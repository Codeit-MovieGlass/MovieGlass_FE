import PropTypes from 'prop-types';

import BackToHome from '@components/BackToHome/BackToHome';
import NoSearchData from './NoSearchData/NoSearchData';

import * as S from './SearchMovie.styled';

const SearchMovie = ({ query, searchedResult }) => {
  return (
    <>
      {searchedResult.length === 0 ? (
        <NoSearchData query={query} />
      ) : (
        <S.SearchMovieContainer>
          {/* Header */}
          <S.SearchMovieHeader>
            <S.SearchMovieText>
              <span className="query">‘{query}’</span> 에 대한 검색 내용이에요
            </S.SearchMovieText>
            <BackToHome />
          </S.SearchMovieHeader>

          {/* Poster Grid */}
          <S.SearchMoviePosterSection>
            <S.SearchMoviePosterList>
              {searchedResult.map((movie, index) => (
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
  query: PropTypes.string.isRequired,
  searchedResult: PropTypes.array.isRequired,
};

export default SearchMovie;
