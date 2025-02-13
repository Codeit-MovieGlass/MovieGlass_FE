import api from './api';

export const getLikedMovies = async () => {
  try {
    // 엔드포인트를 '/mypage/liked-movies'로 수정합니다.
    const response = await api.get('http://3.35.55.17/mypage/liked-movies', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log("응답 데이터:", response.data);

    // {
    //   "isSuccess": true,
    //   "code": 200,
    //   "message": "성공",
    //   "result": [ ... ]
    // }
    //  JSend 형식
    // {
    //   "status": "success",
    //   "data": {
    //     "result": [ ... ]
    //   }
    // }
    const movies = response.data.data.result.map((movie, index) => ({
      id: index, // 고유 id가 없으면 인덱스 사용
      title: movie.movie_name,
      poster: movie.production_image,
      genre: movie.production_genre,
      rating: 0,  // rating 정보가 없으면 기본값 0
      cast: []    // cast 정보가 없으면 빈 배열
    }));

    return movies;
  } catch (error) {
    console.error('좋아요 누른 작품 데이터 가져오기 실패:', error);
    return [];
  }
};
