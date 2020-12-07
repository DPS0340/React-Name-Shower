import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('default user')
  const [nameCandidate, setNameCandidate] = useState('')
  const [visible, setVisible] = useState(false)
  const changeVisibility = () => {
    setVisible(!visible)
  }
  const handleChange = (event) => {
    setNameCandidate(event.target.value)
  }
  return (
    <div className="App">
      <div>
        <input typeof="text" placeholder="name" onChange={handleChange}></input>
        <button onClick={() => setName(nameCandidate)}>Set name</button>
      </div>
      <button onClick={changeVisibility}>Toggle greetings</button>
      {visible && <div id="panel">{`${name}, greetings!`}</div>}
    </div>
  );
}

export default App;
