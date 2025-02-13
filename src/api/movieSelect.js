import { useState, useEffect, useRef } from 'react';

import { MovieData, GetMovieData } from '@pages/Onboarding/MovieSelection/SelectMovieData';
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

  const [displayMovies, setDisplayMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const cachedMovies =useRef({})

  useEffect(() => {
    if (initialMovies.length > 0) {
      setDisplayMovies(initialMovies);
    }
  }, [initialMovies]);

  //새로고침 시 초기화
  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        setDisplayMovies(MovieData);
      } catch (error) {
        console.error('영화 데이터를 불러오는 중 오류 발생', error);
      }
    };
    fetchInitialMovies();
  }, []);

  const fetchNewMovies = async (id,keyword) => {
    if (cachedMovies.current[id]) return cachedMovies.current[id]; 

    const newMovies = await getNewMovies(keyword);
    cachedMovies.current[id]=newMovies; 
    return newMovies;
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
      const selectedIndex = prev.findIndex((movie) => movie.movie_id === id);
      if (selectedIndex === -1) return prev;

      return [...prev.slice(0, selectedIndex + 1), // 선택한 영화까지 유지
        ...filteredNewMovies, // 새로 추가된 4개의 영화
        ...prev.slice(selectedIndex + 1)];
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
      const response = await axios.post('http://3.35.55.17/moviechoice/select', { 
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
