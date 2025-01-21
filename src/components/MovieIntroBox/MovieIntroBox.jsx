import Rating from '@components/Rating/Rating';

import * as S from './MovieIntroBox.styled';

const MovieIntroBox = () => {
  /* API 연동 시 받아올 데이터 */
  const movieTitle = '해리포터와 마법사의 돌';
  const genreList = ['판타지', '모험', '판타지', '모험', '판타지', '모험'];
  const keywordList = ['해리포터', '마법사', '돌'];
  const rating = 4.5;

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

export default MovieIntroBox;
