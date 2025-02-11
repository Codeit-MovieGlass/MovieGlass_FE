import { useState, useEffect } from 'react';

import { MovieData, GetMovieData } from './SelectMovieData.js';

// 영화 선택 시 4개의 영화 데이터를 받아오는 로직, 백엔드와 연동할 때 수정
const getNewMovies = async () => {
  try {
    return GetMovieData;
  } catch (error) {
    console.error('새로운 영화를 불러오는 중 오류 발생:', error);
    return [];
  }
};

// 영화 관련 로직
export const useMovies = () => {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  //초기 영화 데이터를 받아오는 로직, 백엔드와 연동할 때 수정
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

  //영화 선택 시 4개의 새로운 영화 삽입 로직
  const selectMovie = async (id) => {
    if (!selectedMovies.includes(id)) {
      const newMovies = await getNewMovies();
      if (newMovies.length > 0) {
        const selectedIndex = displayMovies.findIndex((movie) => movie.id === id);
        if (selectedIndex === -1) return;
        const newIndex = Math.floor(selectedIndex / 3) * 3 + 3;
        const updatedDisplay = [
          ...displayMovies.slice(0, newIndex),
          ...newMovies,
          ...displayMovies.slice(newIndex),
        ];
        setDisplayMovies(updatedDisplay);
      }
    }
    setSelectedMovies((prev) => {
      return prev.includes(id) ? prev.filter((movieId) => movieId !== id) : [...prev, id];
    });
  };

  return { displayMovies, selectedMovies, selectMovie };
};
