import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import GenreSelect from '@pages/Onboarding/GenreSelectionPage/GenreSelection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/select' element={<GenreSelect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
