function App() {
  const name = 'Zachy'
  const age = 24

  const Hello = ({ name, age }) => {
    const bornYear = () => {
      const currentYear = new Date().getFullYear()
      return currentYear - age
    }
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old.{' '}
        </p>
        <p>So you were probably born in {bornYear()}</p>
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
