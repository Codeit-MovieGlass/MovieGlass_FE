import { useState } from 'react';

import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox';

import { TopTenMovieList } from './mock/TopTenMovieList'; //api연결 전 MockData
import { LeftArrow, RightArrow } from '@icons/Arrow';

import * as S from './TopTenList.styled';

const TopTenList = () => {
  const username = '김철흥'; // 로그인 후 userID(name)을 통해 GET 요청으로 영화 리스트 받아오기

  //현재 영화의 정보
  // const [MovieId, setMovieId] = useState(0);
  // const [MovieTitle, setMovieTitle] = useState(TopTenMovieData[MovieId].title);
  // const [MovieRating, setMovieRating] = useState(TopTenMovieData[MovieId].rating);
  // const [MovieGenreList, setMovieGenreList] = useState(TopTenMovieData[MovieId].genreList);
  // const [MovieKeywordList, setMovieKeywordList] = useState(TopTenMovieData[MovieId].keywordList);
  // const [MovieImgUrl, setMovieImgUrl] = useState(TopTenMovieData[MovieId].imageUrl);

  const [movieList, setMovieList] = useState(TopTenMovieList);
  const [currentMovieID, setCurrentMovieID] = useState(movieList[0].id);

  const currentMovieInfo = movieList.find((movie) => movie.id === currentMovieID);

  const previousMovieID = currentMovieID === 1 ? 10 : currentMovieID - 1;
  const nextMovieID = currentMovieID === 10 ? 1 : currentMovieID + 1;

  const previousMoviePoster = movieList.find((movie) => movie.id === previousMovieID);
  const nextMoviePoster = movieList.find((movie) => movie.id === nextMovieID);

  // 포스터 좌우 이동 Handler
  const handlePreviousClick = () => {
    setCurrentMovieID(previousMovieID);
  };

  const handleNextClick = () => {
    setCurrentMovieID(nextMovieID);
  };

  return (
    <S.TopTenContainer>
      <S.BackgroundImg src={currentMovieInfo.posterImgURL} alt="poster-bg" />

      <LeftArrow onClick={handlePreviousClick} />
      <S.MovieCarouselContainer>
        {/* Side Movie Section */}
        {/* <S.PreviousMovieNumber>{previousMovieID}</S.PreviousMovieNumber>
        <S.NextMovieNumber>{nextMovieID}</S.NextMovieNumber>
        <S.PreviousMoviePoster
          src={previousMoviePoster.posterImgURL}
          alt="poster-previous"
          onClick={handlePreviousClick}
        />
        <S.NextMoviePoster
          src={nextMoviePoster.posterImgURL}
          alt="poster-previous"
          onClick={handleNextClick}
        /> */}

        {/* Current Movie Section */}
        <S.CurrentMovieContainer>
          <S.CurrentMovieNumber>{currentMovieID}</S.CurrentMovieNumber>
          <S.CurrentMoviePoster src={currentMovieInfo.posterImgURL} alt="poster-main" />
          <MovieIntroBox
            movieTitle={currentMovieInfo.title}
            genreList={currentMovieInfo.genreList}
            keywordList={currentMovieInfo.keywordList}
            rating={currentMovieInfo.rating}
          />
        </S.CurrentMovieContainer>
      </S.MovieCarouselContainer>
      <RightArrow onClick={handleNextClick} />
      <S.TopTenTitle>{username} 님만을 위한 TOP 10</S.TopTenTitle>
    </S.TopTenContainer>
  );
};

export default TopTenList;
