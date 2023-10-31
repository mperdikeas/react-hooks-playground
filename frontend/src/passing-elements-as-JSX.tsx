import React, {useState} from 'react';

import {Link} from 'react-router-dom';

export function PassingElementsAsJSX() {

  return (
    <>
      <Link to='/'>home</Link>
      <CounterA/>
      <CounterB>
        <ExpensiveComponent id={'jsx'}/>
      </CounterB>
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



function ExpensiveComponent({id}: {id: string}) {
  console.log(`expensive component passed as [${id}] rendering start`);
  for (let i = 0; i < 1*1000*1000*1000; i++) {
    i++;
  }
  console.log(`expensive component rendering finish`);
  return <div>expensive component</div>
}

  
