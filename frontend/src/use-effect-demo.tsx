import React, {useState, useRef, useEffect} from 'react';

import {Link} from 'react-router-dom';

/*
function useEffectExceptFirstTime(f: ()=>void, dep_array: unknown[]) {

  const first_render = useRef(true);

  useEffect(()=>{
    if (!first_render.current) {
      f();
    } else {
      first_render.current = false;
    }
  }, dep_array);

}
*/

// no dependency array
function useEffectAlwaysExceptFirstTime(f: ()=>void) {

  const first_render = useRef(true);

  useEffect(()=>{
    if (!first_render.current) {
      f();
    } else {
      first_render.current = false;
    }
  });
}


function useIsFirstTime() {

  const first_time = useRef(true);
  useEffect(()=>{
    first_time.current = false;
  }, []);
  return first_time.current;
}

// no dependency array
function useEffectAlwaysExceptFirstTimeB(f: ()=>void) {

  const first_time: boolean = useIsFirstTime();

  useEffect(()=>{
    if (!first_time) {
      f();
    }
  });
}

/*
 *     With dependency array, if you don't supply a value it's exactly like invoking
 *     useEffect with no dependencies at all (not an empty array, just no second argument)
 *     as explained in https://stackoverflow.com/a/77367447/274677.
 *
 *     In such a case the code would normally run always, but given
 *     the wiring in this particular custom hook that doesn't allow executing the code
 *     on the first time, the net effect will be that the code never runs only on subsequent
 *     renders.
 */
function useEffectExceptFirstTime(f: ()=>void, dep_array: undefined | (unknown[]) = undefined) {

  const first_time: boolean = useIsFirstTime();

  useEffect(()=>{
    if (!first_time) {
      f();
    }
  }, dep_array);
}



export function UseEffectDemo() {

  const num_of_renders = useRef(0);

  const first_render = useRef(true);

  const [n, set_n] = useState(0);
  const [m, set_m] = useState(0);

  useEffect(()=>{
    console.log(`use effect 1 (runs only on the first render)`);
  }, []);

  useEffect(()=>{
    if (!first_render.current) {
      console.log(`use effect 2a (runs on all renders except the first)`);
    } else {
      first_render.current = false;
    }
  });

  useEffectAlwaysExceptFirstTime(()=>{
    console.log(`use effect 2b (runs on all renders except the first - custom hook)`);
  });

  useEffectAlwaysExceptFirstTimeB(()=>{
    console.log(`use effect 2c (runs on all renders except the first - two custom hook)`);
  });

  useEffectExceptFirstTime(()=>{
    console.log(`use effect 2d (condititionally (if m has changed) runs on renders except the first - two custom hook)`);
  }, [m]);

  useEffectExceptFirstTime(()=>{
    console.log(`use effect 2e on all renders except the first - two custom hooks`);
  });

  
  useEffect(()=>{
    console.log(`use effect 3 (runs on every render)`);
  });


  const incrementN = ()=>{
    set_n(n+1);
  };

  const incrementM = ()=>{
    set_m(m+1);
  };



  num_of_renders.current = num_of_renders.current+1;
  console.log(`***********    RENDER #${num_of_renders.current}    ****************`);
  return (
    <>
      <Link to='/'>home</Link>

    <div>
      demo of various ways to configure <b>useEffect</b> &hellip; look at the log console.
    </div>
    <div>
      <button onClick={incrementN}> button clicked {n} times so far</button>
    </div>
    <div>
      <button onClick={incrementM}> button clicked {m} times so far</button>
    </div>
    </>
  );


}
