import React, {useState, useRef} from 'react';

import {Link} from 'react-router-dom';

export function UseStateVsUseRef() {

  let [n, set_n] = useState(0);
  const m = useRef(0);
  console.log(`component is rendering`);
  return (
    <>
      <Link to='/'>home</Link>
      <div>value of n is {n}</div>
      <div>value of m is {m.current}</div>
      <div>
        <button onClick={()=>{set_n(n=>n+1);}}>increment n</button>
        <button onClick={()=>{m.current = m.current+1;}}>increment m</button>
      </div>
    </>
  );
}

