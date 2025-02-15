import PropTypes from 'prop-types';
import { useState } from 'react';

import { getMovieModalInfo } from '@api/movie';

import MovieIntroBox from '@components/MovieIntroBox/MovieIntroBox';
import { CurationLeftArrow, CurationRightArrow } from '@icons/Arrow';

import * as S from './Curation.styled';

const animationVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50, // 오른쪽으로 이동 시 x: 50, 왼쪽으로 이동 시 x: -50
  }),
  center: { x: 0, transition: { duration: 0.05 } },
  exit: (direction) => ({
    x: direction > 0 ? -50 : 50, // 오른쪽으로 이동 시 x: -50, 왼쪽으로 이동 시 x: 50
    transition: { duration: 0.05 },
  }),
};

const Curation = ({ curationTitle, movieList, handleMovieModalOpen, handleMovieModalData }) => {
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

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieMouseEnter = (movieIndex) => {
    setSelectedMovie(movieIndex);
  };

  const handleMovieMouseLeave = () => {
    setSelectedMovie(null);
  };

  // 현재 영화 클릭 시 모달 열기
  const handleCurrentMovieClick = async (movie) => {
    handleMovieModalOpen(movie.id);

    const movieModalInfo = await getMovieModalInfo(movie.id);
    console.log('Movie Modal Info: ', movieModalInfo);

    handleMovieModalData(movieModalInfo);
  };

  return (
    <S.MovieListSection>
      <S.CurationTitle>{curationTitle}</S.CurationTitle>

      <S.MovieList>
        <S.LeftArrowButton $startOfList={movieIndex === 0} onClick={onClickPrevious}>
          <CurationLeftArrow $startOfList={movieIndex === 0} />
        </S.LeftArrowButton>

        {movieList.slice(movieIndex, movieIndex + SHOWING_MOVIES).map((movie, index) => {
          return (
            <S.MovieListItem
              key={movie.movie_id}
              onMouseEnter={() => handleMovieMouseEnter(index)}
              onMouseLeave={handleMovieMouseLeave}
            >
              <S.MovieInfoLink
                variants={animationVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                onClick={() => handleCurrentMovieClick(movie.id)}
              >
                <S.MoviePoster src={movie.poster_url} alt={movie.movie_name} />
              </S.MovieInfoLink>

              {/* Movie IntroBox */}
              <MovieIntroBox
                movieTitle={movie.movie_name}
                genreList={movie.genre}
                keywordList={movie.keyword}
                rating={movie.averageRating}
                isRendered={selectedMovie === index}
              />
            </S.MovieListItem>
          );
        })}

        <S.RightArrowButton
          $endOfList={movieIndex === movieList.length - SHOWING_MOVIES}
          onClick={onClickNext}
          disabled={movieList.length < SHOWING_MOVIES}
        >
          <CurationRightArrow
            $endOfList={
              movieList.length > SHOWING_MOVIES
                ? movieIndex === movieList.length - SHOWING_MOVIES
                : movieList.length
            }
          />
        </S.RightArrowButton>
      </S.MovieList>
    </S.MovieListSection>
  );
};

Curation.propTypes = {
  curationTitle: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
  handleMovieModalOpen: PropTypes.func.isRequired,
  handleMovieModalData: PropTypes.func.isRequired,
};

export default Curation;
