import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

// 영화 선택 시 4개의 영화 데이터를 받아오는 로직 
const getNewMovies = async (keyword) => {
  try {
    console.log(keyword);
    const response = await axios.get('', { params: { keyword } })
    
    if(response.data.success){
      let movies =response.data.data;
      console.log('새로 가져온 영화 데이터:', movies);
      
      if(movies.length >4){
        movies = movies.sort(() => 0.5 -Math.random()).slice(0,4);
      }
      
      return movies;
    }else{
      alert('영화 불러오기 실패!');
    }
    
  } catch (error) {
    console.error('새로운 영화를 불러오는 중 오류 발생:', error);
    return [];
  }
};

export const useMovies = () => {
  const navigate =useNavigate();
  const location = useLocation();
  const initialMovies = location.state?.movies || [];

  const [displayMovies, setDisplayMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const cachedMovies =useRef({})
  
  //초기 영화 목록 설정
  useEffect(() => {
      setDisplayMovies(initialMovies);
  }, [initialMovies]);

  //새로고침 시 선택한 영화 목록 초기화
  useEffect(() => {
    const initialSelectedMovies = displayMovies
      .filter(movie => selectedMovies.includes(movie.movie_id))
      .map(movie => movie.movie_id);

    setSelectedMovies(initialSelectedMovies);
  }, [displayMovies]); 

  // 중복된 영화 화면에 표시 방지
  const fetchNewMovies = async (id,keyword) => {
    if (cachedMovies.current[id]) return cachedMovies.current[id]; 

    const newMovies = await getNewMovies(keyword);

    const uniqueNewMovies = newMovies.filter(
      (movie) => !displayMovies.some((displayedMovie) => displayedMovie.movie_id === movie.movie_id)
    );
    cachedMovies.current[id]=uniqueNewMovies; 
    return uniqueNewMovies;
  };

  // 영화 선택/해제 함수
  const selectMovie = async (id,keyword) => {
    const isSelected = selectedMovies.includes(id);

    if (isSelected) {
      // 선택 해제 → 추가된 영화 화면에서 삭제
      setSelectedMovies((prev) => prev.filter((movieId) => movieId !== id));
      setDisplayMovies((prev) =>
        prev.filter((movie) => !cachedMovies.current[id]?.some((m) => m.movie_id === movie.movie_id)|| 
      selectedMovies.includes(movie.movie_id))// 선택 하고 있는 영화는 화면에서 유지
      );
      return; 
    }

    // 새로운 영화 추가
    const newMovies = await fetchNewMovies(id,keyword);
    setSelectedMovies((prev) => [...prev, id]);
   
    //새로 받아온 영화가 중복인지 아닌지
    const filteredNewMovies = newMovies.filter(
      (movie) => !displayMovies.some((displayedMovie) => displayedMovie.movie_id === movie.movie_id)
    );

    setDisplayMovies((prev) => {
      const index = prev.findIndex(({ movie_id }) => movie_id === id);
      if (index === -1) return prev;
      const rowIndex = Math.floor(index / 3);
      const insertIndex = (rowIndex + 1) * 3; // 다음 줄의 첫 번째 위치
    
      return [
        ...prev.slice(0, insertIndex), 
        ...filteredNewMovies, 
        ...prev.slice(insertIndex), 
      ];
    });
  };


  const submitSelectedMovies = async () => {
    try {
    //const user_id=localstorage.getItem('user_id') 회원가입 시에 유저 id 저장
      const response = await axios.post('', { 
        user_id: '',  
        movie_id: selectedMovies,
      });
      
      if (response.data.success) {
        alert('영화 선택이 완료되었습니다!');
        navigate('/login');
        
      } else {
        alert('다시 시도해주세요.'); 
      }
    } catch (error) {
      console.error('영화 선택 실패:', error);
      alert('영화 선택에 실패하셨습니다.');
    }
  };
  

  return { displayMovies, selectedMovies, selectMovie, submitSelectedMovies };
};
