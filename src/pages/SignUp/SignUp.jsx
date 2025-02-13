import { useState } from 'react';
import { useNavigate } from 'react-router';

import { signup } from '@api/auth';

import * as S from './SignUp.styled';

const SignUp = () => {
  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState({ nickname: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signup(userFormData, navigate('/select/genre'));
  };

  const handleLoginClick = () => navigate('/login');

  return (
    <S.SignUpContainer>
      <S.SignUpForm onSubmit={handleSignUp}>
        <S.InputContainer>
          <S.InputLabel>
            닉네임
            <S.NicknameInput
              type="text"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              value={userFormData.nickname}
              onChange={handleChange}
              autoComplete="on"
              required
            />
          </S.InputLabel>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>
            이메일
            <S.EmailInput
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={userFormData.email}
              onChange={handleChange}
              autoComplete="on"
              required
            />
          </S.InputLabel>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>
            비밀번호
            <S.PasswordInput
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="비밀번호를 입력해주세요"
              value={userFormData.password}
              onChange={handleChange}
              required
            />
          </S.InputLabel>
        </S.InputContainer>
        <S.SignUpButton type="submit">회원가입</S.SignUpButton>

        <S.LoginSection>
          이미 계정이 있으신가요? <span onClick={handleLoginClick}>로그인하기</span>
        </S.LoginSection>
      </S.SignUpForm>
    </S.SignUpContainer>
  );
};

export default SignUp;
