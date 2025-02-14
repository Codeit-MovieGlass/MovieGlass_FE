// [수정할 부분]
//   - 로그인 성공 시 로컬 스토리지에 저장할 부분
//   - 리다이렉트 주소
//   - access 토큰 만료시 refresh 토큰을 활용해서 새로운 access 토큰 재발급 로직

import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { postAuthCodeToServer } from '@auth/utils/authHelper';

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

      const handleKakaoAuth = async () => {
        try {
          const response = await postAuthCodeToServer(KAKAO_AUTH_CODE);

          switch (response.status) {
            case 200:
              localStorage.setItem('accessToken', response.data.accessToken);
              navigate('/');
              break;
            case 201:
              navigate('/select/genre');
              break;
            default:
              console.error('Kakao Login Failed: ', response.status);
          }
        } catch (error) {
          console.error('Kakao Login failed: ', error);
        }
      };

      handleKakaoAuth();
    }
  }, [KAKAO_AUTH_CODE, navigate]);

  return <LoadingFullScreen />;
};

export default KakaoRedirect;
