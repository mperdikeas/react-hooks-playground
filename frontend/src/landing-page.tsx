import {Link} from 'react-router-dom';

export function LandingPage() {
  return (
    <>
      <div>
        <Link to='/use-state-vs-use-ref'><b>useState</b> vs <b>useRef</b></Link>
      </div>
      <div>
        <Link to='/use-state-vs-use-ref-wt-use-effect'><b>useState</b> vs <b>useRef</b> (with <b>useEffect</b>)</Link>
      </div>
      <div>
        <Link to='/use-effect-demo'><b>useEffect</b> demo</Link>
      </div>
    </>
  );
}
