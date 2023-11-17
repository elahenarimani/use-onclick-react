import logo from './logo.svg';
import './App.css';
import './components/addButton/AddButton'
import AddButton from './components/addButton/AddButton';
import ReduceButton from './components/reduceButton/ReduceButton';
import { useState} from 'react';


function App() {
  const [counter , setCounter] = useState(0)
  const [mines , setMines] = useState(20)
  return (
    
    <div className="App">
          <div>
            <p>{counter}</p>
            <AddButton onClickHandler={()=>setCounter(counter+1)}></AddButton>
          </div>
          <div>
              <ReduceButton onClickHandlerm={()=>setCounter(counter-1)}/>
          </div>
    </div>
  );
}

export default App;
