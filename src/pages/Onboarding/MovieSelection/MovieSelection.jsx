import { useMovies } from '@api/movieSelect';

import { CheckIcon } from '@icons/Check';
import * as S from './MovieSelection.styled';

const MovieSelection = () => {
  const { displayMovies, selectedMovies, selectMovie, submitSelectedMovies } = useMovies();

  return (
    <S.MovieSelectionFrame>
      <S.MovieSelectionModal>
        <S.MovieSelectionText>재미있게 본 영화를 세 개 이상 골라주세요</S.MovieSelectionText>

        <S.MovieList>
          {displayMovies.map((movie) => (
            <S.MovieItem
              key={movie.movie_id}
              onClick={() => selectMovie(movie.movie_id, movie.keyword)}
            >
              <S.CheckButton $checked={selectedMovies.includes(movie.movie_id)}>
                <CheckIcon $checked={selectedMovies.includes(movie.movie_id)} />
              </S.CheckButton>
              <S.MoviePosterButton>
                <S.MoviePoster src={movie.poster_url} alt={movie.title} />
              </S.MoviePosterButton>
            </S.MovieItem>
          ))}
        </S.MovieList>

        <S.CompleteButtonContainer>
          <S.CompleteButton
            $selected={selectedMovies.length >= 3}
            $active={selectedMovies.length >= 3}
            onClick={() => submitSelectedMovies()}
          >
            완료
          </S.CompleteButton>
        </S.CompleteButtonContainer>
      </S.MovieSelectionModal>
    </S.MovieSelectionFrame>
  );
};

export default MovieSelection;
