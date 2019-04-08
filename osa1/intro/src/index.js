import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by
        <a href="https://github.com/OlliOittinen"> Olli Oittinen</a>
    </div>
  )
}
const App = () => {
  const [counter, setCounter] = useState(0)

  const setToValue = (value) => () => setCounter(value)

/*   setTimeout(
    () => setCounter(counter + 1),
    1000
  ) */

  return (
    <div>
      <Hello name={'pekka'} age={10} />
      <Footer />
      {counter}
      <button onClick={setToValue(counter + 1)}>
      plus
      </button>
      <button onClick={setToValue(0)}>
        zero
      </button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))