import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

import { useState} from 'react';


function App() {
  const [counter , setCounter] = useState(0)
  return (
    
    <div className="App">
          <div>
          <Button onClickHandler={()=>setCounter(counter+1)}>-</Button>
          <p>{counter}</p>
          <Button onClickHandler={()=>setCounter(counter+1)}>+</Button>
          </div>
          <div>
            
          </div>
    </div>
  );
}

export default App;
