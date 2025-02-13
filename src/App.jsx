import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';
import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';

import GoogleCallback from '@auth/redirects/GoogleRedirect';
import KakaoCallback from '@auth/redirects/KakaoRedirect';

import LoginPage from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import GenreSelectionPage from '@pages/Onboarding/GenreSelection/GenreSelection';
import MovieSelection from '@pages/Onboarding/MovieSelection/MovieSelection';

import Home from '@pages/Home/Home';
import MyPage from '@pages/MyPage/MyPage';
import MyReviewPage from '@pages/MyPage/Review/MyReviewPage';
import MyLikePage from '@pages/MyPage/Like/MyLikePage';
import SearchPage from '@pages/Search/SearchPage';
import MovieModal from '@pages/MovieModal/MovieModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 임시 라우트 */}
        <Route path="/movie-modal" element={<MovieModal />} />

        <Route element={<OnBoardingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="oauth">
          <Route path="google" element={<GoogleCallback />} />
          <Route path="kakao" element={<KakaoCallback />} />
        </Route>
        <Route path="select">
          <Route path="genre" element={<GenreSelectionPage />} />
          <Route path="movie" element={<MovieSelection />} />
        </Route>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
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
