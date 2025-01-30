import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';
import Loading from '@pages/Onboarding/PreferenceLoading/PreferenceLoading'
import Home from '@pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/loading' element={<Loading/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
