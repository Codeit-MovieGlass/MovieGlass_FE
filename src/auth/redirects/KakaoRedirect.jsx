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
          const response = await postAuthCodeToServer('kakao', KAKAO_AUTH_CODE);
          console.log('Kakao Login Response: ', response);

          switch (response.status) {
            case 200:
              localStorage.setItem('accessToken', response.accessToken);
              navigate('/');
              break;
            case 201:
              localStorage.setItem('accessToken', response.accessToken);
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
