import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox';
import { LeftArrow, RightArrow } from '@icons/Arrow';
import * as S from './TopTenList.styled';
import PropTypes from 'prop-types';

const animationVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1 },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: { duration: 0.1 },
  }),
};

const TopTenList = ({ movieList }) => {
  const username = '김철흥';
  const [currentMovieID, setCurrentMovieID] = useState(movieList[0].id);
  const [direction, setDirection] = useState(0);

  const currentMovieInfo = movieList.find((movie) => movie.id === currentMovieID);
  const previousMovieID = currentMovieID === 1 ? 10 : currentMovieID - 1;
  const nextMovieID = currentMovieID === 10 ? 1 : currentMovieID + 1;

  const previousMoviePoster = movieList.find((movie) => movie.id === previousMovieID);
  const nextMoviePoster = movieList.find((movie) => movie.id === nextMovieID);

  const handlePreviousClick = () => {
    setDirection(-1); // 왼쪽 이동
    setCurrentMovieID(previousMovieID);
  };

  const handleNextClick = () => {
    setDirection(1); // 오른쪽 이동
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
          <AnimatePresence custom={direction} mode="wait">
            <S.PreviousMoviePoster
              key={previousMovieID}
              src={previousMoviePoster.posterImgURL}
              alt="poster-previous"
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              onClick={handlePreviousClick}
            />
          </AnimatePresence>
        </S.SideMoviePosterContainer>

        {/* Current Movie Section */}
        <S.CurrentMovieContainer>
          <S.CurrentMovieNumber>{currentMovieID}</S.CurrentMovieNumber>
          <AnimatePresence custom={direction} mode="wait">
            <S.CurrentMoviePoster
              key={currentMovieID}
              src={currentMovieInfo.posterImgURL}
              alt="poster-main"
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            />
          </AnimatePresence>
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
          <AnimatePresence custom={direction} mode="wait">
            <S.NextMoviePoster
              key={nextMovieID}
              src={nextMoviePoster.posterImgURL}
              alt="poster-next"
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              onClick={handleNextClick}
            />
          </AnimatePresence>
        </S.SideMoviePosterContainer>
      </S.MovieCarouselContainer>
      <RightArrow onClick={handleNextClick} />
      <S.TopTenTitle>{username} 님만을 위한 TOP 10</S.TopTenTitle>
    </S.TopTenContainer>
  );
};

TopTenList.propTypes = {
  movieList: PropTypes.array.isRequired,
};

export default TopTenList;
