import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';
import {Lay,LoginPage,Sign_Up_Page} from '@pages/Onboarding/AuthPage/Auth'

import Home from '@pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Lay>
          <LoginPage/></Lay>}/>
        <Route path='/signup' element={<Lay><Sign_Up_Page/></Lay>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
