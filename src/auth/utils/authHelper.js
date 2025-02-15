import api from '@api/api';

export const postAuthCodeToServer = async (service, authCode) => {
  try {
    const response = await api.post(`/auth/${service}`, {
      code: authCode,
    });
    console.log(`${service} Login Response: `, response);

    if (response.status === 200 || response.status === 201) {
      return {
        status: response.status,
        accessToken:
          service === 'kakao' ? response.data.result.accessToken : response.data.result.accessToken,
      };
    } else {
      console.warn('Authorization Code POST fail');
    }
  } catch (error) {
    console.error('Fetching access token failed: ', error);
  }
};

// 서비스 자체 로그인 Logic
export const login = async (userData) => {
  console.log('Login Form Data: ', userData);

  try {
    const response = await api.post('/auth/login', userData);
    console.log('자체 로그인 response: ', response);

    if (response.status === 200) {
      const { accesstoken } = response.data.result;
      localStorage.setItem('accessToken', accesstoken);

      return true;
    } else {
      alert('로그인 실패!');
      return false;
    }
  } catch (error) {
    console.error('로그인 실패: ', error);
  }
};

// 회원가입 Logic
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
