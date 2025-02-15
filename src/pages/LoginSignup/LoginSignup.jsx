import { useState } from 'react';

import Login from '@pages/LoginSignup/Login/Login';
import SignUp from '@pages/LoginSignup/SignUp/SignUp';

const LoginSignup = () => {
  // 로그인과 회원가입 페이지에 대한 상태 관리
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => setIsLogin(true);
  const handleSignupClick = () => setIsLogin(false);

  return (
    <>
      {isLogin ? (
        <Login handleSignupClick={handleSignupClick} />
      ) : (
        <SignUp handleLoginClick={handleLoginClick} />
      )}
    </>
  );
};

export default LoginSignup;
