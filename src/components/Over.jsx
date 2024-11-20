import './Over.css'

const Over = ({retry, score}) => {
  return (
    <div>
      <h1>Fim!</h1>
      <h2>Sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Resetar</button>
    </div>
  )
}

export default Over
