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

const guessesQuantity = 5

function App() {
  const[gameStage, setGameStage] = useState(states[0].name);
  const[words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQuantity)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random()
      * Object.keys(categories).length)];

  const word = words[category][Math.floor(Math.random()
  * words[category].length)]

    return {word,category};
  }

  const startGame = (startGame) => {
    const {word, category} = pickWordAndCategory();

    let wordLetters = word.split("");

    //console.log(word,category);
    //console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(states[1].name)
  };

  const verifyLetter = (letter) => {
    const nomralizedLetter = letter.toLowerCase()

    if(guessedLetters.includes(nomralizedLetter) 
    || wrongLetters.includes(nomralizedLetter)) {
      return;
    }

    if(letters.includes(nomralizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        nomralizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) =>[
        ...actualWrongLetters,
        nomralizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  const clearLetterStates = () =>  {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() =>{
    if(guesses <= 0) {

      clearLetterStates()

      setGameStage(states[2].name);
    }

  }, [guesses])

  const retry = () => {
    setScore(0);
    setGuesses(guessesQuantity);

    setGameStage(states[0].name)
  }


  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && 
        <Game
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory}
          letters={letters}  
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
        {gameStage === 'over' && <Over retry={retry} score={score} />}
    </div>
  );
}

export default App;