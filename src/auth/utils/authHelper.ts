import api from '@api/api';

export const postAuthCodeToServer = async (authCode) => {
  try {
    const response = await api.post('/auth/code', {
      code: authCode,
    });

    if (response.data.isSuccess) {
      return { status: response.data.code, data: response.data.result };
    } else {
      console.warn('Authorization Code POST fail');
    }
  } catch (error) {
    console.error('Fetching access token failed: ', error);
  }
};
