import api from './api';

export const handleNext = async (selectedGenres, genres, navigate) => {
  if (selectedGenres.length === 2) {
    const selectedGenreNames = genres
      .filter((genre) => selectedGenres.includes(genre.id))
      .map((genre) => genre.name.replace(/\//g, ','))
      .join(',');

    try {
      const response = await api.get('/moviechoice/genre', {
        params: { genre: selectedGenreNames },
      });

      if (response.data.success) {
        const movies = response.data.data;

        navigate('/select/movie', { state: { movies } });
      } else {
        alert('장르 선택 실패!');
      }

      const movies = response.data.data;

      navigate('/select/movie', { state: { movies } });
    } catch (error) {
      console.error('영화 데이터 가져오기 실패:', error);
    }
  }
};
