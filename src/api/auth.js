import api from './api';

export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    console.log(response);

    switch (response.status) {
      case 201:
        return { status: response.status };

      case 400:
        alert('이미 존재하는 닉네임입니다.');
        break;
    }
  } catch (error) {
    console.error('회원가입 실패: ', error);
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    console.log(response);

    switch (response.status) {
      case 200: {
        const { accesstoken } = response.data.result;
        localStorage.setItem('accessToken', accesstoken);

        return true;
      }

      default:
        alert('로그인 실패!');
        return false;
    }
  } catch (error) {
    console.error('로그인 실패: ', error);
  }
};
