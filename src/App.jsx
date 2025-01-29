import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import MovieSelect from '@pages/MovieSelect/MovieSelect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/movieselect" element={<MovieSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
