import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
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
    const name = 'Pekka'
    const age = 10
  
    return (
      <>
        <h1>Greetings</h1>
        <Hello name="Arto" age={26 + 10} />
        <Hello name={name} age={age} />
        <Footer />
      </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))