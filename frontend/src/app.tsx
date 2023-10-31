import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {LandingPage                } from './landing-page';
import {UseStateVsUseRef           } from './use-state-vs-use-ref';
import {UseStateVsUseRefWtUseEffect} from './use-state-vs-use-ref-wt-use-effect';
import {UseEffectDemo              } from './use-effect-demo'; 
import {PassingElementsAsJSX       } from './passing-elements-as-JSX';

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
  {
    path: '/use-effect-demo',
    element: <UseEffectDemo/>
  },  
  {
    path: '/passing-elements-as-JSX',
    element: <PassingElementsAsJSX/>
  },  
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
