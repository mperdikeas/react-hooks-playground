import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {LandingPage} from './landing-page';
import {UseStateVsUseRef           } from './use-state-vs-use-ref';
import {UseStateVsUseRefWtUseEffect}  from './use-state-vs-use-ref-wt-use-effect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/use-state-vs-use-ref',
    element: <UseStateVsUseRef/>
  },
  {
    path: '/use-state-vs-use-ref-wt-use-effect',
    element: <UseStateVsUseRefWtUseEffect/>
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
