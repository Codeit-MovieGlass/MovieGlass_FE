import { BrowserRouter, Route, Routes } from 'react-router';

import OnBoardingLayout from '@layout/OnBoarding/OnBoardingLayout';
import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import LoginPage from '@pages/OnBoarding/Login/Login';
import SignUp from '@pages/OnBoarding/SignUp/SignUp';
<<<<<<< Updated upstream
=======
import GenreSelect from '@pages/OnBoarding/GenreSelectionPage/GenreSelection';
import CollectionPage from "@pages/Collection/CollectionPage";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
<<<<<<< Updated upstream
=======
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/review" element={<MyReviewPage />} /> {/*  올바르게 등록되었는지 확인 */}

>>>>>>> Stashed changes
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
