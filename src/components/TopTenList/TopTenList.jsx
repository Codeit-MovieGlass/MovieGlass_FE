import { useState } from 'react';

import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox';

import { LeftArrow, RightArrow } from '@icons/Arrow';

import * as S from './TopTenList.styled';
import PropTypes from 'prop-types';

const TopTenList = ({ movieList }) => {
  const username = '김철흥'; // 로그인 후 userID(name)을 통해 GET 요청으로 영화 리스트 받아오기

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
        {/* Previous Movie Section */}
        <S.SideMoviePosterContainer>
          <S.PreviousMovieNumber>{previousMovieID}</S.PreviousMovieNumber>
          <S.PreviousMoviePoster
            src={previousMoviePoster.posterImgURL}
            alt="poster-previous"
            onClick={handlePreviousClick}
          />
        </S.SideMoviePosterContainer>

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

        {/* Next Movie Section */}
        <S.SideMoviePosterContainer>
          <S.NextMovieNumber>{nextMovieID}</S.NextMovieNumber>
          <S.NextMoviePoster
            src={nextMoviePoster.posterImgURL}
            alt="poster-previous"
            onClick={handleNextClick}
          />
        </S.SideMoviePosterContainer>
      </S.MovieCarouselContainer>
      <RightArrow onClick={handleNextClick} />
      <S.TopTenTitle>{username} 님만을 위한 TOP 10</S.TopTenTitle>
    </S.TopTenContainer>
  );
};

TopTenList.Proptypes = {
  movieList: PropTypes.array.isRequired,
};

export default TopTenList;
