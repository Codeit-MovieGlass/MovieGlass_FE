/*수정할 부분 
로그인 성공 시 로컬 스토리지에 저장할 부분
리다이렉트 주소
*/

import api from '@api/api';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isFirstRender = useRef(true);

  const queryParams = new URLSearchParams(location.search);
  const GOOGLE_AUTH_CODE = queryParams.get('code');

  useEffect(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    if (GOOGLE_AUTH_CODE) {
      console.log('Authorization Code:', GOOGLE_AUTH_CODE);

      const sendAuthCodeToserver = async () => {
        try {
          const response = await api.get('/auth/google', {
            params: { code: GOOGLE_AUTH_CODE },
          });
          console.log(response);
          //로그인 성공 시 로컬 스토리지에 저장할 요소 나중에 수정
          if (response.data.isSuccess) {
            const userId = response.data.result.userId;
            localStorage.setItem('userId', userId);

            //상태 코드에 따른 리다이렉트 처리
            if (response.status === 201) {
              // 최초 회원가입 -> 장르 선택 페이지로 이동
              navigate('/select/genre');
            } else if (response.status === 200) {
              // 기존 로그인 -> 홈페이지로 이동
              localStorage.setItem('accessToken', response.data.accessToken);
              localStorage.setItem('refreshToken', response.data.refreshToken);
              navigate('/');
            }
          } else {
            console.warn('Authorization Code POST fail');
            navigate('/login');
          }
        } catch (error) {
          console.error('Fetching access token failed: ', error);
        }
      };
      sendAuthCodeToserver();
    }
  }, [GOOGLE_AUTH_CODE, navigate]);

  return <h1>Google 로그인 중...</h1>;
};

export default GoogleCallback;
