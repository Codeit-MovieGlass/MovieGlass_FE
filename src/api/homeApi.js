import api from './api';

export const getCurationShuffleData = async () => {
  try {
    const response = await api.get('/curations/shuffle');
    // console.log('큐레이션 응답 데이터:', response);
    return response.data;
  } catch (error) {
    console.error('셔플 데이터 가져오기 실패:', error);
    return null;
  }
};

export const getEmotionCurationData = async (emotion) => {
  const params = { emotion: emotion };

  try {
    const response = await api.get('/curations/emotions', { params });
    // console.log('감정 큐레이션 응답 데이터:', response);
    return response.data;
  } catch (error) {
    console.error('감정 데이터 가져오기 실패:', error);
    return null;
  }
};

export const getSearchData = async (keyword) => {
  const params = { query: keyword };

  try {
    const response = await api.get('/movies/search', { params });
    // console.log('검색 응답 데이터:', response);
    return response.data;
  } catch (error) {
    console.error('검색 데이터 가져오기 실패:', error);
    return null;
  }
};

export const getTopTenData = async () => {
  try {
    const response = await api.get('/movies/top10', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0MTFAZ21haWwuY29tIiwiaWF0IjoxNzM5Mzc1OTQ0LCJleHAiOjE3MzkzNzk1NDR9.MyFSX3ykggU_lg50FFbdzgCkn2XSgaNJ1za2y8BY6Ps'}`, // 토큰 추가
      },
    });
    console.log('탑텐 응답 데이터:', response);
    return response.data;
  } catch (error) {
    console.error('탑텐 데이터 가져오기 실패:', error);
    return null;
  }
};
