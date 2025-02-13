/* 수정할 부분 
-MovieLogic파일
초기 영화 데이터 받아오는 로직, 
영화 선택 시 4개 영화 받아오는 로직
완료 버튼 클릭 시 취향 분석 페이지 이동하는 이벤트 핸들러 구현
*/

import { useMovies } from '@api/movieSelect';

import { CheckIcon } from '@icons/Check';
import { MovieData, GetMovieData } from '@pages/Onboarding/MovieSelection/SelectMovieData';
import * as S from './MovieSelection.styled';

const MovieSelection = () => {
  const { displayMovies, selectedMovies, selectMovie, submitSelectedMovies } = useMovies(MovieData);

  return (
    <S.MovieSelectionFrame>
      <S.MovieSelectionModal>
        <S.MovieSelectionText>재미있게 본 영화를 세 개 이상 골라주세요</S.MovieSelectionText>

        <S.MovieList>
          {displayMovies.map((movie) => (
            <S.MovieItem key={movie.movie_id} onClick={() => selectMovie(movie.movie_id,movie.keyword)}>
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
            onClick={()=>submitSelectedMovies()}
          >
            완료
          </S.CompleteButton>
        </S.CompleteButtonContainer>
      </S.MovieSelectionModal>
    </S.MovieSelectionFrame>
  );
};

export default MovieSelection;
