import PropTypes from 'prop-types';

import * as S from './MovieInfoTab.styled';

const MovieInfoTab = ({ movieInfos }) => {
  return (
    <S.MovieInfoSection>
      {/* 영화 제목, 러닝타임, 개봉일 정보 */}
      <S.MovieTitleInfoSection>
        <S.MovieTitle>{movieInfos.movie_name}</S.MovieTitle>
        <S.MovieRunningTimeReleaseDateContainer>
          <S.MovieRunningTime>러닝타임 {movieInfos.runtime}</S.MovieRunningTime>
          <S.MovieReleaseDate>{movieInfos.releaseDate}</S.MovieReleaseDate>
        </S.MovieRunningTimeReleaseDateContainer>
      </S.MovieTitleInfoSection>

      {/* 출연진, 장르, 등급, 키워드 */}
      <S.CastGenreSection>
        {/* 출연진 */}
        <S.CastContainer>
          <S.CastTitle>출연진</S.CastTitle>
          <S.CastActors>{movieInfos.actor}</S.CastActors>
        </S.CastContainer>

        {/* 관람 등급, 장르 및 키워드 */}
        <S.AgeRatingGenreContainer>
          <S.AgeRatingIcon
            src={`/AgeRating/${movieInfos.ageLimit}.svg`}
            alt={`${movieInfos.ageLimit}세 이상 관람가`}
          />
          <S.GenreKeywordContainer>
            <S.GenreKeywordList>
              {movieInfos.genre.map((genre) => (
                <S.GenreKeywordItem key={genre}>
                  <S.GenreInfo>#{genre}</S.GenreInfo>
                </S.GenreKeywordItem>
              ))}
            </S.GenreKeywordList>

            <S.GenreKeywordList>
              {movieInfos.keyword.map((keyword) => (
                <S.GenreKeywordItem key={keyword}>
                  <S.KeywordInfo>#{keyword}</S.KeywordInfo>
                </S.GenreKeywordItem>
              ))}
            </S.GenreKeywordList>
          </S.GenreKeywordContainer>
        </S.AgeRatingGenreContainer>
      </S.CastGenreSection>

      {/* 영화 줄거리 */}
      <S.SynopsisSection>
        <S.SynopsisTitle>줄거리</S.SynopsisTitle>
        <S.SynopsisContent>{movieInfos.synopsis}</S.SynopsisContent>
      </S.SynopsisSection>
    </S.MovieInfoSection>
  );
};

MovieInfoTab.propTypes = {
  movieInfos: PropTypes.shape({
    movie_name: PropTypes.string,
    runtime: PropTypes.string,
    releaseDate: PropTypes.string,
    actor: PropTypes.string,
    ageLimit: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string),
    keyword: PropTypes.arrayOf(PropTypes.string),
    synopsis: PropTypes.string,
  }),
};

export default MovieInfoTab;
