import api from "./api";

export const handleNext = async (selectedGenres, genres, navigate) => {
  if (selectedGenres.length === 2) {
    const selectedGenreNames = genres
      .filter((genre) => selectedGenres.includes(genre.id))
      .map((genre) => genre.name.replace(/\//g,','))
      .join(',');

    console.log(selectedGenreNames);

    try {
      const response = await api.get('/moviechoice/genre', {
        params: { genre: selectedGenreNames },
      });

      console.log('백엔드 응답 데이터:', response);

      const movies = response.data.data;

      navigate('/select/movie', { state: { movies } });
    } catch (error) {
      console.error('영화 데이터 가져오기 실패:', error);
    }
  }
};
