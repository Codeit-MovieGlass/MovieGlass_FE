import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { CurationLeftArrow, CurationRightArrow } from '@icons/Arrow';

import * as S from './Curation.styled';
import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox';

const animationVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100, // 오른쪽으로 이동 시 x: 100, 왼쪽으로 이동 시 x: -100
  }),
  center: {
    x: 0,
    transition: { duration: 0.05 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100, // 오른쪽으로 이동 시 x: -100, 왼쪽으로 이동 시 x: 100
    transition: { duration: 0.05 },
  }),
};

const Curation = ({ curationTitle, movieList }) => {
  console.log(movieList);

  const [movieIndex, setMovieIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const SHOWING_MOVIES = 5;

  const onClickPrevious = () => {
    if (movieIndex !== 0) {
      setDirection(-1); // 왼쪽 이동
      setMovieIndex((prev) => prev - 1);
    }
  };

  const onClickNext = () => {
    if (movieIndex !== movieList.length - SHOWING_MOVIES) {
      setDirection(1); // 오른쪽 이동
      setMovieIndex((prev) => prev + 1);
    }
  };

  return (
    <S.CurationContainer>
      <S.MovieListContainer>
        <S.CurationTitle>{curationTitle}</S.CurationTitle>
        <S.MovieList>
          <S.LeftArrowButton $startOfList={movieIndex === 0} onClick={onClickPrevious}>
            <CurationLeftArrow $startOfList={movieIndex === 0} />
          </S.LeftArrowButton>
          <AnimatePresence custom={direction} mode="wait">
            {movieList.slice(movieIndex, movieIndex + SHOWING_MOVIES).map((movie) => (
              <S.MovieInfoLink
                key={movie.movie_id}
                variants={animationVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <S.MoviePoster src={movie.poster_url} alt={movie.movie_name} />
                <S.MovieInfo>
                  <MovieIntroBox
                    movieTitle={movie.movie_name}
                    genreList={movie.genre}
                    keywordList={movie.keyword}
                    rating={movie.averageRating}
                  />
                </S.MovieInfo>
              </S.MovieInfoLink>
            ))}
          </AnimatePresence>
          <S.RightArrowButton
            $endOfList={movieIndex === movieList.length - SHOWING_MOVIES}
            onClick={onClickNext}
          >
            <CurationRightArrow $endOfList={movieIndex === movieList.length - SHOWING_MOVIES} />
          </S.RightArrowButton>
        </S.MovieList>
      </S.MovieListContainer>
    </S.CurationContainer>
  );
};

Curation.propTypes = {
  curationTitle: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
};

Curation.defaultProps = {
  movieList: [], // 기본값을 빈 배열로 설정
};

export default Curation;
