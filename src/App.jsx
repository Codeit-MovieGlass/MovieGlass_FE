import { BrowserRouter, Route, Routes } from 'react-router';

import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';
import Layout from '@layout/Layout';

import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';
import KakaoCallback from './auth/redirects/KakaoRedirect';
import GoogleCallback from './auth/redirects/GoogleRedirect';
import GenreSelect from '@pages/OnBoarding/GenreSelectionPage/GenreSelection';
import MovieSelection from '@pages/OnBoarding/MovieSelection/MovieSelection';

import Home from '@pages/Home/Home';
import MyPage from '@pages/MyPage/MyPage';
import SearchPage from '@pages/Search/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OnBoardingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="oauth">
          <Route path="google" element={<GoogleCallback />} />
          <Route path="kakao" element={<KakaoCallback />} />
        </Route>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="mypage">
            <Route index element={<MyPage />} />
          </Route>
        </Route>

        <Route path="select">
          <Route path="genre" element={<GenreSelect />} />
          <Route path="movie" element={<MovieSelection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
