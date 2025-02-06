import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import MovieSelect from '@pages/Onboarding/MovieSelectionPage/MovieSelection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="select">
          <Route path="movie" element={<MovieSelect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
