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
                        <M.Movie style={{ background: `lightgray url(${movie.poster}) 50% / cover no-repeat` }}
                        onClick={()=>selectMovie(movie.id)}>
                            {selectedMovies.includes(movie.id) ?<M.CButton style={{background:'var(--Primary, #7E37F9)'}}><M.C_W/></M.CButton>:<M.CButton style={{background:' var(--Grayscale-Gray2, #3B383B)'}}><M.C_B/></M.CButton>}
                        </M.Movie>
                    ))}

                </M.MovieList>
                {selectedMovies.length ===3 ? <div>
                    <M.Complete style={{background:' var(--Primary, #7E37F9)'}}><M.C style={{color:' var(--Grayscale-White, #FFF)'}}>완료</M.C></M.Complete>
                </div>:<div><M.Complete ><M.C >완료</M.C></M.Complete></div>}


            </M.Modal>

        </M.Frame>
    )
}

export default Movie_select