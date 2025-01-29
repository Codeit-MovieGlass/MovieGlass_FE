import * as S from '@pages/MovieSelect/MovieSelect.styled';
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
    <S.MovieSelectFrame>
      <S.Modal>
        <S.Explain>재미있게 본 영화를 세 개 이상 골라주세요.</S.Explain>
        <S.MovieList>
          {displayMovies.map((movie) => (
            <S.Movie key={movie.id} style={{ background: `lightgray url(${movie.poster}) 50% / cover no-repeat` }}
              onClick={() => selectMovie(movie.id)}> 
                <S.Check $Checked={selectedMovies.includes(movie.id)}>
                  {selectedMovies.includes(movie.id)? <S.CheckedIcon/>:<S.CheckIcon/>}
                </S.Check>
            </S.Movie>
          ))}
        </S.MovieList>
            <S.Complete $Selected={selectedMovies.length>=3}>
              <S.Click $active={selectedMovies.length>=3}>완료</S.Click>
            </S.Complete>
      </S.Modal>
    </S.MovieSelectFrame>
  );
}

export default MovieSelect;
