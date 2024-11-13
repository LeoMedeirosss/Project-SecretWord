import './App.css';
import { useCallback, useEffect,useState } from 'react';

import{wordsList} from './data/words.js'

import StartScreen from './components/StartScreen.jsx';
import Game from './components/Game.jsx';
import Over from './components/Over.jsx';

const states=[
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "over"}
];

function App() {
  const[gameStage, setGameStage] = useState(states[0].name);
  const[words] = useState(wordsList);

  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen />}
        {gameStage === 'game' && <Game />}
        {gameStage === 'over' && <Over />}
    </div>
  );
}

export default App;
