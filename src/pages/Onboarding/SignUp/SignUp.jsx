import { useState } from 'react';
import { useNavigate } from 'react-router';

import * as S from './SignUp.styled';

import { useSignup } from './SignUpApI';


const SignUp = () => {
  const navigate = useNavigate();
  const {signup} = useSignup();

  const [formData, setFormData] = useState({ nickname: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*
  닉네임, 이메일 입력창 벗어날 때 중복검사 핸들러
  const handleBlur=(e)=>{   
    } 
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData, () => navigate('/select/genre'));
  };

  const handleLoginClick = () => navigate('/login');

  return (
    <S.SignUpContainer>
      <S.SignUpForm onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.InputLabel>닉네임</S.InputLabel>
          <S.NicknameInput
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>이메일</S.InputLabel>
          <S.EmailInput
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.PasswordInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleChange}
            required
          />
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
