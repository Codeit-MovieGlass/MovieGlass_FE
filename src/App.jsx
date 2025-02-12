import { BrowserRouter, Route, Routes } from 'react-router';

import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';
import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';
import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout setKeyword={setKeyword} />}>
          <Route index element={<Home keyword={keyword} />} />
        </Route>

        <Route element={<OnBoardingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
