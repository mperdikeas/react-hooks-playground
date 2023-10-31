import React, {useState, memo} from 'react';

import {Link} from 'react-router-dom';

export function Components_JSX_Memo_UseMemo() {



  return (
    <>
      <Link to='/'>home</Link>
      <CounterA/>
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
          <ExpensiveComponentMemoized key={key}/>
      </div>
  );
}



function ExpensiveComponent({id}: {id: string}) {
  const preamble = `expensive component passed as [${id}] rendering`;
  console.log(`${preamble} start`);
  for (let i = 0; i < 1*1000*1000*1000; i++) {
    i++;
  }
  console.log(`${preamble} finish`);
  return <div>expensive component (<b>{id}</b>)</div>
}

  
const ExpensiveComponentMemoized = memo(()=><ExpensiveComponent id={'memoized component'}/>);
