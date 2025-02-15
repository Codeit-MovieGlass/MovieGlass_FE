import { GoogleLogo, KakaoLogo } from '@icons/Social';

import * as S from './SocialLogin.styled';

const SocialLogin = () => {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const GoogleOAuthBaseURL = 'https://accounts.google.com/o/oauth2/v2/auth';
  const GOOGLE_AUTH_URL = `${GoogleOAuthBaseURL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20profile%20email`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <S.SocialLoginContainer>
      <S.KakaoLoginBtn onClick={handleKakaoLogin}>
        <KakaoLogo />
        <S.SocialLoginText>카카오로 로그인하기</S.SocialLoginText>
      </S.KakaoLoginBtn>
      <S.GoogleLoginBtn onClick={handleGoogleLogin}>
        <GoogleLogo />
        <S.SocialLoginText>구글로 로그인하기</S.SocialLoginText>
      </S.GoogleLoginBtn>
    </S.SocialLoginContainer>
  );
};

export default SocialLogin;
