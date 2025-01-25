import * as S from './TopTenList.styled.js';
import TopTenMovieData from '../../Mock/TopTenMovieData.json'; //api연결 전 MockData
import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox.jsx';
import { useEffect, useState } from 'react';

const TopTenList = () => {
  const USERNAME = '유저0';
  //현재 영화의 정보
  const [MovieId, setMovieId] = useState(0);
  const [MovieTitle, setMovieTitle] = useState(TopTenMovieData[MovieId].title);
  const [MovieRating, setMovieRating] = useState(TopTenMovieData[MovieId].rating);
  const [MovieGenreList, setMovieGenreList] = useState(TopTenMovieData[MovieId].genreList);
  const [MovieKeywordList, setMovieKeywordList] = useState(TopTenMovieData[MovieId].keywordList);
  const [MovieImgUrl, setMovieImgUrl] = useState(TopTenMovieData[MovieId].imageUrl);

  //이전, 다음 영화 관련
  const prevMovieId = (id) => {
    return id - 1 !== -1 ? id - 1 : 9;
  };
  const nextMovieId = (id) => {
    return id + 1 !== 10 ? id + 1 : 0;
  };
  const [prevMovieImgUrl, setprevMovieImgUrl] = useState(
    TopTenMovieData[prevMovieId(MovieId)].imageUrl
  );
  const [nextMovieImgUrl, setnextMovieImgUrl] = useState(
    TopTenMovieData[nextMovieId(MovieId)].imageUrl
  );

  //현재 영화 정보가 바뀔 시
  useEffect(() => {
    const prevId = prevMovieId(MovieId);
    const nextId = nextMovieId(MovieId);

    setprevMovieImgUrl(TopTenMovieData[prevId].imageUrl);
    setnextMovieImgUrl(TopTenMovieData[nextId].imageUrl);

    setMovieImgUrl(TopTenMovieData[MovieId].imageUrl);
    setMovieRating(TopTenMovieData[MovieId].rating);
    setMovieTitle(TopTenMovieData[MovieId].title);
    setMovieGenreList(TopTenMovieData[MovieId].genreList);
    setMovieKeywordList(TopTenMovieData[MovieId].keywordList);
  }, [MovieId]);

  //좌우 영화 변경 함수
  const onClickPrevMovie = () => {
    setMovieId((prev) => prevMovieId(prev));
  };
  const onClickNextMovie = () => {
    setMovieId((prev) => nextMovieId(prev));
  };

  return (
    <S.TopTenContainer>
      <S.BackgroundImg Url={MovieImgUrl} />
      <S.MovieListContainer>
        {/* 화살표 */}
        <S.LeftArrow onClick={onClickPrevMovie} />
        <S.RightArrow onClick={onClickNextMovie} />
        {/* 좌우 영화 부분 */}
        <S.PrevMovieNum>{prevMovieId(MovieId) + 1}</S.PrevMovieNum>
        <S.NextMovieNum>{nextMovieId(MovieId) + 1}</S.NextMovieNum>
        <S.PrevMovieImg Url={prevMovieImgUrl} onClick={onClickPrevMovie} />
        <S.NextMovieImg Url={nextMovieImgUrl} onClick={onClickNextMovie} />
        {/* 메인 영화 부분 */}
        <S.MovieNum>{MovieId + 1}</S.MovieNum>
        <S.MainMovieImg Url={MovieImgUrl} />
        <S.MovieIntroBoxContainer>
          <MovieIntroBox
            movieTitle={MovieTitle}
            genreList={MovieGenreList}
            keywordList={MovieKeywordList}
            rating={MovieRating}
          />
        </S.MovieIntroBoxContainer>
      </S.MovieListContainer>
      <S.TopTenTitle>{USERNAME}님만을 위한 TOP 10</S.TopTenTitle>
    </S.TopTenContainer>
  );
};

export default TopTenList;
