import { useState } from 'react';
import { useNavigate } from 'react-router';

import * as S from './Login.styled';
import axios from 'axios';

import { useLogin } from './LoginApI';

// 나중에 해야 할 일
// - 로그인, 소셜 로그인, 회원가입 백엔드와 연동 로직

const LoginPage = () => {
  const navigate = useNavigate();
  const {login, error}=useLogin();

  // 자체 로그인 데이터
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //폼 데이터 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 임시 로그인 로직 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);

  };

  // 비밀번호 토글
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const handleSignupClick = () => navigate('/signup');

  //소셜 로그인 핸들러
  const handleGoogleLogin = () => {
    window.location.href = '';
  };

  const handleKakaoLogin = () => {
    window.location.href = '';
  };

  return (
    <S.LoginContainer>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.EmailInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <S.PasswordContainer>
          <S.PasswordInput
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <S.EyeIcon
            onClick={togglePasswordVisibility}
            $disabled={formData.password.length === 0}
          />
        </S.PasswordContainer>
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.LoginForm>
      <S.SocialDivider />
      <S.SocialLoginContainer>
        <S.GoogleLoginBtn onClick={handleGoogleLogin}>
          <S.GoogleLogo />
          <S.SocialLoginText>구글로 로그인하기</S.SocialLoginText>
        </S.GoogleLoginBtn>
        <S.KakaoLoginBtn onClick={handleKakaoLogin}>
          <S.KakaoLogo />
          <S.SocialLoginText>카카오로 로그인하기</S.SocialLoginText>
        </S.KakaoLoginBtn>
      </S.SocialLoginContainer>
      <S.SignUpSection>
        무비글라스가 처음이세요? <span onClick={handleSignupClick}>회원가입하기</span>
      </S.SignUpSection>
    </S.LoginContainer>
  );
};

export default LoginPage;
