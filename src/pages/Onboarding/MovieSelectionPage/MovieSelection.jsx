import * as S from '@pages/Onboarding/MovieSelectionPage/MovieSelection.styled';
import { useMovies } from './MovieLogic';
/* 수정할 부분 
-MovieLogic파일
초기 영화 데이터 받아오는 로직, 
영화 선택 시 4개 영화 받아오는 로직
완료 버튼 클릭 시 취향 분석 페이지 이동하는 이벤트 핸들러 구현
*/

function MovieSelectionPage() {
  const { displayMovies, selectedMovies, selectMovie } = useMovies();

  return (
    <S.MovieSelectionFrame>
      <S.MovieSelectionModal>
        <S.MovieSelectionText>재미있게 본 영화를 세 개 이상 골라주세요.</S.MovieSelectionText>

        <S.MovieList>
          {displayMovies.map((movie) => (
            <S.Movie
              key={movie.id}
              style={{ background: `lightgray url(${movie.poster}) 50% / cover no-repeat` }}
              onClick={() => selectMovie(movie.id)}
            >
              <S.CheckButton $Checked={selectedMovies.includes(movie.id)} />
            </S.Movie>
          ))}
        </S.MovieList>

        <S.CompleteButtonContainer>
          <S.CompleteButton
            $Selected={selectedMovies.length >= 3}
            $active={selectedMovies.length >= 3}
          >
            <span>완료</span>
          </S.CompleteButton>
        </S.CompleteButtonContainer>
      </S.MovieSelectionModal>
    </S.MovieSelectionFrame>
  );
}

export default MovieSelectionPage;
