import * as S from './MovieIntroBox.styled';

const genreList = ['판타지', '모험', '판타지', '모험', '판타지', '모험'];
const keywordList = ['해리포터', '마법사', '돌'];

const MovieIntroBox = () => {
  return (
    <S.MovieIntroBoxContainer>
      <S.InfoSection>
        <S.Title>해리포터와 마법사의 돌asdasdsadsdasdasd</S.Title>
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
      </S.InfoSection>
    </S.MovieIntroBoxContainer>
  );
};

export default MovieIntroBox;
