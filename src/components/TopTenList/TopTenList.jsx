import PropTypes from 'prop-types';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { getMovieModalInfo } from '@api/movie';

import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox';
import { LeftArrow, RightArrow } from '@icons/Arrow';

import * as S from './TopTenList.styled';

const animationVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 100 : -100 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: { duration: 0.1 },
  }),
};

const TopTenList = ({ movieList, username, handleMovieModalOpen, handleMovieModalData }) => {
  const [currentMovieID, setCurrentMovieID] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentMovieInfo = movieList[currentMovieID];
  const previousMovieID = currentMovieID === 0 ? 9 : currentMovieID - 1;
  const nextMovieID = currentMovieID === 9 ? 0 : currentMovieID + 1;

  const previousMoviePoster = movieList[previousMovieID];
  const nextMoviePoster = movieList[nextMovieID];

  const handlePreviousClick = () => {
    setDirection(-1); // 왼쪽 이동
    setCurrentMovieID(previousMovieID);
  };

  const handleNextClick = () => {
    setDirection(1); // 오른쪽 이동
    setCurrentMovieID(nextMovieID);
  };

  // 현재 영화 클릭 시 모달 열기
  const handleCurrentMovieClick = async () => {
    handleMovieModalOpen(currentMovieInfo.id);

    const movieModalInfo = await getMovieModalInfo(currentMovieInfo.id);
    console.log('Movie Modal Info: ', movieModalInfo);

    handleMovieModalData(movieModalInfo);
  };

  return (
    <S.TopTenContainer>
      <S.BackgroundImg src={currentMovieInfo.horizontalImage} alt="poster-bg" />

      <LeftArrow onClick={handlePreviousClick} />
      <S.MovieCarouselContainer>
        {/* Previous Movie Section */}
        <S.SideMoviePosterContainer>
          <S.PreviousMovieNumber>{previousMovieID + 1}</S.PreviousMovieNumber>
          <AnimatePresence custom={direction} mode="wait">
            <S.PreviousMoviePoster
              key={previousMovieID}
              src={previousMoviePoster.productionImage}
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
          <S.CurrentMovieNumber>{currentMovieID + 1}</S.CurrentMovieNumber>
          <S.CurrentMovieModalButton onClick={handleCurrentMovieClick}>
            <AnimatePresence custom={direction} mode="wait">
              <S.CurrentMoviePoster
                key={currentMovieID}
                src={currentMovieInfo.productionImage}
                alt="poster-main"
                variants={animationVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              />
            </AnimatePresence>
            <MovieIntroBox
              movieTitle={currentMovieInfo.movieName}
              genreList={currentMovieInfo.productionGenre}
              keywordList={currentMovieInfo.productionKeyword}
              rating={currentMovieInfo.averageRating}
              isRendered={true}
            />
          </S.CurrentMovieModalButton>
        </S.CurrentMovieContainer>

        {/* Next Movie Section */}
        <S.SideMoviePosterContainer>
          <S.NextMovieNumber>{nextMovieID + 1}</S.NextMovieNumber>
          <AnimatePresence custom={direction} mode="wait">
            <S.NextMoviePoster
              key={nextMovieID}
              src={nextMoviePoster.productionImage}
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
  username: PropTypes.string.isRequired,
  handleMovieModalOpen: PropTypes.func.isRequired,
  handleMovieModalData: PropTypes.func.isRequired,
};

export default TopTenList;
