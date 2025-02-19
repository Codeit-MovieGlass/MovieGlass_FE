import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';
import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';

import GoogleCallback from '@auth/redirects/GoogleRedirect';
import KakaoCallback from '@auth/redirects/KakaoRedirect';

import LoginSignup from '@pages/LoginSignup/LoginSignup';
import GenreSelectionPage from '@pages/Onboarding/GenreSelection/GenreSelection';
import MovieSelection from '@pages/Onboarding/MovieSelection/MovieSelection';

import Home from '@pages/Home/Home';
import MyPage from '@pages/MyPage/MyPage';
import MyReviewPage from '@pages/MyPage/Review/MyReviewPage';
import MyLikePage from '@pages/MyPage/Like/MyLikePage';
import SearchPage from '@pages/Search/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OnBoardingLayout />}>
          <Route index element={<LoginSignup />} />
        </Route>

        <Route path="oauth">
          <Route path="kakao" element={<KakaoCallback />} />
          <Route path="google" element={<GoogleCallback />} />
        </Route>
        <Route path="select">
          <Route path="genre" element={<GenreSelectionPage />} />
          <Route path="movie" element={<MovieSelection />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="browse" element={<Home />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="review" element={<MyReviewPage />} />

            <Route path="like">
              <Route index element={<MyLikePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
