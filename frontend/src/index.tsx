import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';


/*
 *
 *    If you render with StrictMode then React causes the render functions of your
 *    components to be called twice and, in doing so, makes observing the intended
 *    behaviour (e.g. by means of logging messages on the console) harder.
 *
 */
const RENDER_WITH_STRICT = false;

ReactDOM.createRoot(document.getElementById('root')!).render(
  (()=>{
    if (RENDER_WITH_STRICT) {
      return (
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      );
    } else {
      return <App/>
    }
  })()
);
