import { useState } from 'react';
import './App.css';

function App() {
  
  const [state, setState] = useState(0);

  const [stats, setStats] = useState({
    name: 'WSP',
    subs: 2500
  });

  const handleClick = () => {
    setState((state) => state + 1)
    // for boolean state
    // setState(state => !state)
  }

  const handleStats = () => {
    setStats(prevState => {
      return {
        ...prevState,
        subs: prevState.subs + 1
      }
    })
  }

  return (
    <div className="App">

      <h4>Updating State (Multiple Ways)</h4>

      <button onClick={handleClick}>Increment Number <strong>{state}</strong></button><br />
      <button onClick={handleStats}>
        Increment <strong>{stats.name}</strong> Stats: <strong>{stats.subs}</strong>
      </button><br />
      <button onClick={() => setStats(prevState => ({...prevState, subs: prevState.subs + 1}))}>
        Increment (Inline) - <strong>{stats.name}</strong> Stats: <strong>{stats.subs}</strong>
      </button>

      <br /><br />
      <small>~ WebStylePress ~<br />
      youtube.com/webstylepress</small>
      <br /><br />
    </div>
  );
}

export default App;
