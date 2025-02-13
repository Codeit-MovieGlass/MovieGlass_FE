// src/api/reviewApi.js
import api from './api';

// 사용자 리뷰 조회 (내가 남긴 리뷰)
export const getUserReviews = async () => {
  try {
    const response = await api.get('http://3.35.55.17/mypage/reviews', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    console.log("응답 데이터:", response.data);
    
    // 만약 응답이 JSend 형식이라면: { "isSuccess": true, "code": 200, "message": "성공", "result": [...] }
    // 혹은 JSend 대신 { "status": "success", "data": { "result": [...] } } 형식일 수도 있으므로,
    const reviewsArray = response.data.result || response.data.data?.result || [];
    
    const reviews = reviewsArray.map((review, index) => ({
      id: review.review_id || index,
      title: review.movie_name,
      rating: review.rating,
      content: review.review_comment,
      imageUrl: review.production_image,
      date: "",     // 필요시 백엔드에서 받은 날짜 사용
      spoiler: false,
      movieId: review.movie_id || null
    }));
    return reviews;
  } catch (error) {
    console.error('리뷰 조회 실패:', error);
    return [];
  }
};

// 리뷰 작성 또는 수정
export const createOrUpdateReview = async (movieId, reviewData) => {
  try {
    const response = await api.post(`/api/movies/${movieId}/reviews`, reviewData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('리뷰 작성/수정 실패:', error);
    throw error;
  }
};

// 리뷰 삭제
export const deleteReview = async (movieId, reviewId) => {
  try {
    const response = await api.delete(`/api/movies/${movieId}/reviews/${reviewId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('리뷰 삭제 실패:', error);
    throw error;
  }
};
