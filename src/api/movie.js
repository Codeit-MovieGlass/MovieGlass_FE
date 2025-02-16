import api from './api';

export const getMovieModalInfo = async (movieId) => {
  try {
    const response = await api.get(`/movies/movieinfo/?movieId=${movieId}`);
    // console.log('Movie Modal Info: ', response);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch movie modal info');
    }
  } catch (error) {
    console.error('Error fetching movie modal info:', error);
    throw error;
  }
};
