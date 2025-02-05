import { useState } from 'react';
import PropTypes from 'prop-types';

import { CurationLeftArrow, CurationRightArrow } from '@icons/Arrow';

import * as S from './Curation.styled';

const Curation = ({ curationTitle, movieList }) => {
  const [movieIndex, setMovieIndex] = useState(0);

  const SHOWING_MOVIES = 5;

  const onClickPrevious = () => {
    if (movieIndex !== 0) {
      setMovieIndex((prev) => prev - 1);
    }
  };

  const onClickNext = () => {
    if (movieIndex !== movieList.length - SHOWING_MOVIES) {
      setMovieIndex((prev) => prev + 1);
    }
  };

  return (
    <S.CurationContainer>
      <S.MovieListContainer>
        <S.CurationTitle>{curationTitle}</S.CurationTitle>
        <S.MovieContainer>
          <S.LeftArrowButton $startOfList={movieIndex === 0} onClick={onClickPrevious}>
            <CurationLeftArrow $startOfList={movieIndex === 0} />
          </S.LeftArrowButton>
          {movieList.slice(movieIndex, movieIndex + SHOWING_MOVIES).map((movie, index) => (
            <S.MovieImg key={index} src={movie.posterImgURL} alt={movie.title} />
          ))}
          <S.RightArrowButton
            $endOfList={movieIndex === movieList.length - SHOWING_MOVIES}
            onClick={onClickNext}
          >
            <CurationRightArrow $endOfList={movieIndex === movieList.length - SHOWING_MOVIES} />
          </S.RightArrowButton>
        </S.MovieContainer>
      </S.MovieListContainer>
    </S.CurationContainer>
  );
};

Curation.propTypes = {
  curationTitle: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
};

export default Curation;
