import './App.css';
import { useCallback, useEffect,useState } from 'react';

import{wordsList} from './data/words.js'

import StartScreen from './components/StartScreen.jsx';

const states=[
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "over"}
];

function App() {
  const[gameStage, setGameStage] = useState(states[0].name);

  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen />}
        {gameStage === 'game' && <StartScreen />}
        {gameStage === 'over' && <StartScreen />}
    </div>
  );
}

export default App;
