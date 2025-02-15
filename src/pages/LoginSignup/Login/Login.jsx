import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { login } from '@auth/utils/authHelper';

import SocialLogin from './Social/SocialLogin';

import * as S from './Login.styled';

const Login = ({ handleSignupClick }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const isLogin = await login(formData);

    if (isLogin) {
      navigate('/browse');
    } else {
      alert('로그인에 실패했습니다.');
    }
  };

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <S.LoginContainer>
      <S.LoginForm onSubmit={handleLogin}>
        <S.EmailInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="on"
          required
        />
        <S.PasswordContainer>
          <S.PasswordInput
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
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

      <SocialLogin />

      <S.SignUpSection>
        무비글라스가 처음이세요? <span onClick={handleSignupClick}>회원가입하기</span>
      </S.SignUpSection>
    </S.LoginContainer>
  );
};

Login.propTypes = {
  handleSignupClick: PropTypes.func.isRequired,
};

export default Login;
