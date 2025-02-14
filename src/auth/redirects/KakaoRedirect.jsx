// [수정할 부분]
//   - 로그인 성공 시 로컬 스토리지에 저장할 부분
//   - 리다이렉트 주소
//   - access 토큰 만료시 refresh 토큰을 활용해서 새로운 access 토큰 재발급 로직

import api from '@api/api';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

import LoadingFullScreen from '@pages/LoadingFullScreen/LoadingFullScreen';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFirstRender = useRef(true); // 초기 렌더링 시에만 로그인 로직 실행하도록 하는 Flag

  const KAKAO_AUTH_CODE = new URLSearchParams(location.search).get('code');

  useEffect(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    if (KAKAO_AUTH_CODE) {
      console.log('Kakao Authorization Code: ', KAKAO_AUTH_CODE);

      const sendAuthCodeToserver = async () => {
        try {
          const response = await api.get('/auth/kakao', {
            code: KAKAO_AUTH_CODE,
          });
          console.log(response.data);

          //로그인 성공 시 로컬 스토리지에 저장할 요소 나중에 수정
          if (response.data.isSuccess) {
            const userId = response.data.result.userId;
            localStorage.setItem('userId', userId);

            //상태 코드에 따른 리다이렉트 처리리
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
  }, [KAKAO_AUTH_CODE, navigate]);

  return <LoadingFullScreen />;
};

export default KakaoRedirect;
