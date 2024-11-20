import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <>
      <div>
        <div className='by'>
          <h4>Done by: <a 
          href="https://github.com/LeoMedeirosss" 
          target='blank'
          aria-hidden="true">LeoMedeirosss</a></h4>
        </div>
        <div className='start'>
          <h1 className='title'>Secret Word</h1>
          <p>Aperte no botão abaixo para começar!</p>
         <button onClick={startGame}>Começar o jogo</button>
        </div>
      </div>
    </>
  )
}

export default StartScreen
