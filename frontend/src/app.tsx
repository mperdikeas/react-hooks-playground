import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {LandingPage} from './landing-page';
import {UseStateVsUseRef} from './use-state-vs-use-ref';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/use-state-vs-use-ref',
    element: <UseStateVsUseRef/>
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
