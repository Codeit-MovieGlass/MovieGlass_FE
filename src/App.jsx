import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import Home from '@pages/Home/Home';
import S from '@pages/Onboarding/Gerne_SelectPage/gerne_select'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/select' element={<S/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
