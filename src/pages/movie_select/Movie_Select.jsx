import *as M from '@pages/movie_select/Movie_Select.styled'
import {useMovies} from'./useMovie'

function Movie_select(){
    const { displayMovies, selectedMovies, selectMovie } = useMovies();

    return(
        <M.Frame>
            <M.Modal>
                <M.P>
                    재미있게 본 영화를 세 개 이상 골라주세요.
                </M.P>
                <M.MovieList>
                    {displayMovies.map((movie)=>(
                        <M.Movie style={{ background: `lightgray url(${movie.poster}) 50% / cover no-repeat` }}>
                        </M.Movie>
                    ))}

                </M.MovieList>
                <div>
                    <button></button>
                </div>

            </M.Modal>

        </M.Frame>
    )
}

export default Movie_select