import PropTypes from 'prop-types';

import Rating from '@components/Rating/Rating';

import * as S from './MovieIntroBox.styled';

const MovieIntroBox = ({ movieTitle, genreList, keywordList, rating }) => {
  return (
    <S.MovieIntroBoxContainer>
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
};

// MovieIntroBox.defaultProps = {
//   movieTitle: '해리포터와 마법사의 돌',
//   genreList: ['판타지', '모험', '판타지', '모험', '판타지', '모험'],
//   keywordList: ['해리포터', '마법사', '돌'],
//   rating: 4.5,
// };

export default MovieIntroBox;
