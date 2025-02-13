import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
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

  // 중복 API 방지
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
      // 선택 해제 → 추가된 영화 삭제
      setSelectedMovies((prev) => prev.filter((movieId) => movieId !== id));
      setDisplayMovies((prev) =>
        prev.filter((movie) => !cachedMovies.current[id]?.some((m) => m.movie_id === movie.movie_id)|| 
      selectedMovies.includes(movie.movie_id))
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
    
      // 현재 영화 리스트에서 선택한 영화가 속한 "줄"을 찾음 (한 줄에 3개씩)
      const rowIndex = Math.floor(index / 3);
    
      // 선택한 영화의 다음 줄 위치를 구함
      const insertIndex = (rowIndex + 1) * 3; // 다음 줄의 첫 번째 위치
    
      return [
        ...prev.slice(0, insertIndex), 
        ...filteredNewMovies, 
        ...prev.slice(insertIndex), 
      ];
    });
  };

  //완료 버튼 눌렀을 때 선택한 영화 id 서버로 전달
  const submitSelectedMovies = async () => {
    if (selectedMovies.length < 3) {
      alert("최소 3개의 영화를 선택해야 합니다."); 
      return;
    }
  
    try {
      console.log(selectedMovies);
      const response = await axios.post('', { 
        user_id: '',  
        movie_id: selectedMovies,
      });
      
      if (response.data.success) {
        console.log(' 영화 선택이 성공적으로 저장되었습니다.');
        alert("영화 선택이 완료되었습니다!");
      } else {
        console.log(response.data)
        console.error("오류 발생:", response.data.message);
        alert(response.data.message); 
      }
    } catch (error) {
      console.log(error.message);
      console.error("❌ 서버 요청 중 오류 발생:", error);
      alert("서버에 요청하는 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  };
  

  return { displayMovies, selectedMovies, selectMovie, submitSelectedMovies };
};
