import React, {useState, memo, useMemo, useRef} from 'react';

import {Link} from 'react-router-dom';

export function Components_JSX_Memo_UseMemo() {



  return (
    <>
      <Link to='/'>home</Link>
      <CounterA/>
      <CounterAWtUseMemo/>
      <CounterB>
        <ExpensiveComponent id={'jsx'}/>
      </CounterB>
      <CounterC/>
    </>
  );


}


function CounterA() {

  let [counter, setCounter] = useState(0);

  return (
      <div style={{border: '3px red solid', width: '20em'}}>
          <div>
            {counter}
            <button onClick={()=>setCounter(counter+1)}>INC</button>
          </div>
          <ExpensiveComponent id={'element'}/>    
      </div>
  );
}

function CounterAWtUseMemo() {

  let [counter, setCounter] = useState(0);

  return (
      <div style={{border: '3px red solid', width: '20em'}}>
          <div>
            {counter}
            <button onClick={()=>setCounter(counter+1)}>INC</button>
          </div>
          <ExpensiveComponentWtUseMemo id={'element with useMemo'}/>    
      </div>
  );
}

function CounterB({children}:{children: JSX.Element}) {

  let [counter, setCounter] = useState(0);

  return (
      <div style={{border: '3px red solid', width: '20em'}}>
          <div>
            {counter}
            <button onClick={()=>setCounter(counter+1)}>INC</button>
          </div>
          {children}
      </div>
  );
}


function CounterC() {

  let [counter, setCounter] = useState(0);
  let [key, set_key] = useState(0);
  
  return (
      <div style={{border: '3px red solid', width: '20em'}}>
          <div>
            {counter}
            <button onClick={()=>setCounter(counter+1)}>INC</button>
          </div>
          <button onClick={()=>set_key(key+1)}>change key of below component</button>
          <ExpensiveComponentMemoized key={key} id='memoized component'/>
      </div>
  );
}



function ExpensiveComponent({id}: {id: string}) {
  const n = useRef(0);
  n.current += 1;
  const preamble = `expensive component passed as [${id}] rendering`;
  console.log(`${preamble} start`);
  const max = expensive_function();
  console.log(`${preamble} finish`);
  return (
    <>
      <div>expensive component (<b>{id}</b>)</div>
      <div>rendered <b>{n.current}</b> times thus far</div>
      <div>value is: {max})</div>
    </>
  );
}

function ExpensiveComponentWtUseMemo({id}: {id: string}) {
  const n = useRef(0);
  n.current += 1;
  const preamble = `expensive component passed as [${id}] rendering`;
  console.log(`${preamble} start`);
  const max = useMemo(expensive_function, []);
  console.log(`${preamble} finish`);
  return (
    <>
        <div>expensive component (<b>{id}</b>)</div>
        <div>rendered <b>{n.current}</b> times thus far</div>
        <div>value is: {max}</div>
    </>
  );
}

function expensive_function() {
  console.log('expensive function called');
  let max = -1;
  for (let i = 0; i < 1*1000*1000*1000; i++) {
    if (max < i) {
      max = i;
    }
  }
  return max;
}

/*
 *
 *    I initially had it like this but there's a simpler way
 *
 *    const ExpensiveComponentMemoized = memo(()=><ExpensiveComponent id={'memoized component'}/>);
 *
 * 
 *    The only drawback of the below simpler way of memoizing the component is that it forces us to
 *    pass the [id] at the place where the memoized component is used. I.e. the memoized component
 *    has the exact same interface as the original component (this makes sense).
 *
 */

const ExpensiveComponentMemoized = memo(ExpensiveComponent);
