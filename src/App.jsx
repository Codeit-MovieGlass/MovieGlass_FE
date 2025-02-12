import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';
import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';

import Home from '@pages/Home/Home';
import MyPage from "@pages/MyPage/MyPage";
import MyReviewPage from "@pages/ReviewPage/MyReviewPage"; // 

import CollectionDetail from "@pages/Collection/CollectionDetail";
import CollectionPage from "@pages/Collection/CollectionPage";
import GenreSelect from '@pages/OnBoarding/GenreSelectionPage/GenreSelection';
import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
          <Route path="/review" element={<MyReviewPage />} /> {/*  올바르게 등록되었는지 확인 */}

        </Route>

        <Route element={<OnBoardingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="select">
          <Route path="genre" element={<GenreSelect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
