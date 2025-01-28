import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import Movie_select from '@pages/movie_select/Movie_Select'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/movie_select' element={<Movie_select/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
