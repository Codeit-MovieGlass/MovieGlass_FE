import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';
import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';

import Home from '@pages/Home/Home';
import MyPage from '@pages/MyPage/MyPage';
import MyReviewPage from '@pages/ReviewPage/MyReviewPage'; //

import CollectionDetail from '@pages/Collection/CollectionDetail';
import CollectionPage from '@pages/Collection/CollectionPage';

import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';
import GoogleCallback from '@auth/redirects/GoogleRedirect';
import KakaoCallback from '@auth/redirects/KakaoRedirect';

import GenreSelect from '@pages/OnBoarding/GenreSelectionPage/GenreSelection';
import MovieSelection from '@pages/OnBoarding/MovieSelection/MovieSelection';

import SearchPage from '@pages/Search/SearchPage';

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

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="collection">
              <Route index element={<CollectionPage />} />
              <Route path=":id" element={<CollectionDetail />} />
            </Route>
            <Route path="review" element={<MyReviewPage />} />
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
