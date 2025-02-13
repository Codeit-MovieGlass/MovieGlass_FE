import { BrowserRouter, Route, Routes } from 'react-router';

import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';
import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';
import GoogleCallback from './auth/redirects/GoogleRedirect';
import KakaoCallback from './auth/redirects/KakaoRedirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<OnBoardingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="oauth">
          <Route path="google" element={<GoogleCallback />} />
          <Route path="kakao" element={<KakaoCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
