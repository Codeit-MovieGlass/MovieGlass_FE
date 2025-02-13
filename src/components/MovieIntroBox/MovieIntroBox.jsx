import PropTypes from 'prop-types';

import Rating from '@components/Rating/Rating';

import * as S from './MovieIntroBox.styled';

const MovieIntroBox = ({ movieTitle, genreList, keywordList, rating, isRendered }) => {
  return (
    <S.MovieIntroBoxContainer $isRendered={isRendered}>
      <S.InfoSection>
        <S.Title>{movieTitle}</S.Title>
        <S.GenreKeywordBox>
          <S.GenresBox>
            {genreList.map((genre, index) => (
              <span key={index}>#{genre}</span>
            ))}
          </S.GenresBox>
          <S.KeywordBox>
            {keywordList.map((keyword, index) => (
              <span key={index}>#{keyword}</span>
            ))}
          </S.KeywordBox>
        </S.GenreKeywordBox>
        <Rating rating={rating} />
      </S.InfoSection>
    </S.MovieIntroBoxContainer>
  );
};

MovieIntroBox.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genreList: PropTypes.array.isRequired,
  keywordList: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  isRendered: PropTypes.bool.isRequired,
};

export default MovieIntroBox;
