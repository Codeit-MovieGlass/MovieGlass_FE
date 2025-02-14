import api from './api';

export const signup = async (userData, onSuccess) => {
  try {
    const response = await api.post('/auth/signUp', userData);
    console.log(response);

    localStorage.setItem('nickname', userData.nickname);

    switch (response.code) {
      case 200:
        onSuccess();
        break;
      case 201:
        onSuccess();
        break;
      case 400:
        alert('이미 존재하는 닉네임입니다.');
        break;
      default:
        alert('회원가입에 실패했습니다.');
    }
  } catch (error) {
    console.error('회원가입 실패: ', error);
  }
};

export const login = async (userData, navigate) => {
  console.log('Login Form Data: ', userData);
  
  try {
    const response = await api.post('/auth/login', userData);
    console.log(response);

    switch (response.data.code) {
      case 200: {
        const { accesstoken, refreshtoken } = response.data.result;

        localStorage.setItem('accessToken', accesstoken);
        localStorage.setItem('refreshToken', refreshtoken);

        navigate('/'); // 로그인 성공 시 메인 페이지로 이동
        break;
      }

      default:
        alert('로그인 실패!');
        return;
    }
  } catch (error) {
    console.error('로그인 실패: ', error);
  }
};
