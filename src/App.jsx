import { BrowserRouter, Route, Routes } from 'react-router';

import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';
import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';

import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';
import GenreSelect from '@pages/OnBoarding/GenreSelectionPage/GenreSelection';
import MovieSelection from '@pages/OnBoarding/MovieSelection/MovieSelection';
import MyPage from '@pages/MyPage/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="mypage">
            <Route index element={<MyPage />} />
          </Route>
        </Route>

        <Route element={<OnBoardingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
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
