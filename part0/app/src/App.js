function App() {
  const name = 'Zachy'
  const age = 20

  const Hello = ({ props }) => {
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old.{' '}
        </p>
      </div>
    )
  }
  return (
    <div className="App">
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
