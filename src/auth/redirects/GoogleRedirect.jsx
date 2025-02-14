import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { postAuthCodeToServer } from '@auth/utils/authHelper';

import LoadingFullScreen from '@pages/LoadingFullScreen/LoadingFullScreen';

const GoogleRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFirstRender = useRef(true);

  const GOOGLE_AUTH_CODE = new URLSearchParams(location.search).get('code');

  useEffect(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    if (GOOGLE_AUTH_CODE) {
      console.log('Google Authorization Code:', GOOGLE_AUTH_CODE);

      const handleGoogleAuth = async () => {
        try {
          const response = await postAuthCodeToServer('google', GOOGLE_AUTH_CODE);
          console.log('Google Login Response: ', response);

          switch (response.status) {
            case 200:
              localStorage.setItem('accessToken', response.accessToken);
              navigate('/');
              break;
            case 201:
              localStorage.setItem('accessToken', response.accessToken);
              navigate('/select/genre');
              break;
          }
        } catch (error) {
          console.error('Google Login failed: ', error);
        }
      };

      handleGoogleAuth();
    }
  }, [GOOGLE_AUTH_CODE, navigate]);

  return <LoadingFullScreen />;
};

export default GoogleRedirect;
