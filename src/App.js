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

  const startGame = (startGame) => {
    setGameStage(states[1].name)
  };

  const verifyLetter = () => {
    setGameStage(states[2].name)
  }

  const retry = () => {
    setGameStage(states[0].name)
  }

  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
        {gameStage === 'over' && <Over retry={retry} />}
    </div>
  );
}

export default App;
