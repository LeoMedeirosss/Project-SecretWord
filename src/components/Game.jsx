import { useState, useRef } from 'react'
import './Game.css'

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters, 
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null)

  const handleSubmit = (e) =>{
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }

  return (

    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='tip'>Dica: <span>{pickedCategory}</span></h3>
        <p>Tentativas restantes: <strong>{guesses}</strong></p>

      <div className='wordConteiner'>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={1} className='letter'>
              {letter}
            </span>
          ) : (
            <span key={1} className='whiteSquare'></span>
          )
        )}
      </div>

      <div className='letterConteiner'>
        <p>Adivinhe uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='letter' 
            maxLength="1" 
            required onChange={(e)=> setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            />
          <button>Play</button>
        </form>
      </div>

      <div className='wrongLettersConteiner'>
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter,i) =>(
          <span key={i}>{letter},</span>
        ))}
      </div>
    </div>
  )
}

export default Game
