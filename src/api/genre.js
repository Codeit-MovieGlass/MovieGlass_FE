import axios from "axios";

export const handleNext = async (selectedGenres, genres, navigate) => {
  if (selectedGenres.length === 2) {
    const selectedGenreNames = genres
      .filter((genre) => selectedGenres.includes(genre.id))
      .map((genre) => genre.name.replace(/\//g, ','))
      .join(',');

    console.log('보내는 장르:',selectedGenreNames);
    

    try {
      const response = await axios.get('', {
        params: { genre: selectedGenreNames },
      });

      console.log('백엔드 응답 데이터:', response);

      const movies = response.data.data;
      console.log('받아온 영화 데이터:',movies);

      navigate('/select/moive', { state: { movies } });
    } catch (error) {
      console.error('영화 데이터 가져오기 실패:', error);
    }
  }
};
