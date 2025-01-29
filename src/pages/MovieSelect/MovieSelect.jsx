import * as M from '@pages/MovieSelect/MovieSelect.styled';
import { useMovies } from './MovieLogic';
/* 수정할 부분 
-MovieLogic파일
초기 영화 데이터 받아오는 로직, 
영화 선택 시 4개 영화 받아오는 로직
완료 버튼 클릭 시 취향 분석 페이지 이동하는 이벤트 핸들러 구현
*/

function MovieSelect() {
  const { displayMovies, selectedMovies, selectMovie } = useMovies();

  return (
    <M.Frame>
      <M.Modal>
        <M.P>재미있게 본 영화를 세 개 이상 골라주세요.</M.P>
        <M.MovieList>
          {displayMovies.map((movie) => (
            <M.Movie style={{ background: `lightgray url(${movie.poster}) 50% / cover no-repeat` }}
              onClick={() => selectMovie(movie.id)}> {selectedMovies.includes(movie.id) ? (
                <M.Check style={{ background: 'var(--Primary, #7E37F9)' }}>
                  <M.Active />
                </M.Check>
              ) : (
                <M.Check style={{ background:' var(--Grayscale-Gray2, #3B383B)' }}>
                  <M.DeActive />
                </M.Check>
              )}
            </M.Movie>
          ))}
        </M.MovieList>
            <M.Complete Selected={selectedMovies.length>=3}>
              <M.C active={selectedMovies.length>=3}>완료</M.C>
            </M.Complete>
      </M.Modal>
    </M.Frame>
  );
}

export default MovieSelect;
