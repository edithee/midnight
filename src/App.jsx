
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import E404Page from './pages/E404Page';
import CompDemoPage from './pages/CompDemoPage';
import TestDBPage from './pages/TestDBPage';

const App = () => {

  // var corsOptions = {
  //   origin: "http://localhost:5173"
  // };

  // const cors = require("cors");
  // App.use(cors(corsOptions));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/comps' element={<CompDemoPage />} />
        <Route path='/testdb' element={<TestDBPage />} />
        <Route path='*' element={<E404Page />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};




export default App;