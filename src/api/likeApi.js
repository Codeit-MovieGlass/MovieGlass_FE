// src/api/likeApi.js
import api from './api';

export const getLikedMovies = async () => {
  try {
    const response = await api.get('http://3.35.55.17/mypage/liked-movies', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log("Liked Movies API Response:", response.data);
    
    const moviesArray = response.data.result || response.data.data?.result || [];
    
    const movies = moviesArray.map((movie, index) => ({
      id: movie.id || index,
      title: movie.movie_name,
      poster: movie.production_image,
      genre: movie.production_genre,
      rating: movie.rating || 0,
      cast: movie.cast || []
    }));
    return movies;
  } catch (error) {
    console.error("좋아요 누른 작품 데이터 가져오기 실패:", error);
    return [];
  }
};
