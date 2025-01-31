import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import GerneSelect from '@pages/Onboarding/GerneSelectionPage/GerneSelection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/select' element={<GerneSelect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
