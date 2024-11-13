import './Over.css'

const Over = ({retry}) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Resetar</button>
    </div>
  )
}

export default Over
