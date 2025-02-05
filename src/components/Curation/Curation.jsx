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
          <S.LeftArrowButton onClick={onClickPrevious}>
            <CurationLeftArrow />
          </S.LeftArrowButton>
          {movieList.slice(movieIndex, movieIndex + SHOWING_MOVIES).map((movie, index) => (
            <S.MovieImg key={index} src={movie.posterImgURL} alt={movie.title} />
          ))}
          <S.RightArrowButton onClick={onClickNext}>
            <CurationRightArrow />
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
