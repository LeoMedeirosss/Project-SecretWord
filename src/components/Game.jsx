import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: 00</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='tip'>Dica: <span>Dica</span></h3>

      <div className='wordConteiner'>
        <span className='letter'>a</span>
        <span className='whiteSquare'></span>
      </div>

      <div className='letterConteiner'>
        <p>Adivinhe uma letra da palavra</p>
        <form>
          <input type="text" name='letter' maxLength="1" required/>
          <button className='botao'>Play</button>
        </form>
      </div>

      <div className='wrongLettersConteiner'>
        <p>Letras já utilizadas</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game
