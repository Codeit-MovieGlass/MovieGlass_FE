import api from './api';

export const getUserProfile = async () => {
  try {
    const response = await api.get('/mypage/profile');

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('프로필 정보 조회 실패: ', response.status);
      return null;
    }
  } catch (error) {
    console.error('프로필 정보 조회 실패: ', error);
  }
};

export const editUserProfile = async (profileData) => {
  try {
    const response = await api.put('/mypage/profile', profileData);

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('프로필 정보 수정 실패: ', error);
  }
};

export const getUserReviews = async () => {
  try {
    const response = await api.get('/mypage/reviews');

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('리뷰 조회 실패: ', error);
  }
};
