import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad, allClicks}) => {
    if (allClicks.length===0) {
        return <div>
            <h1>Statistiikka</h1>
            <p>Ei yhtään palautetta annettu</p>
            </div>
    }
    return ( 
        <div>
        <h1>Statistiikka</h1>
        <p>hyvä {good}</p>
        <p>neutraali {neutral}</p>
        <p>huono {bad}</p>
        <p>yhteensä {allClicks.length}</p>
        <p>keskiarvo {(getSum(allClicks)/allClicks.length)}</p>
        <p>positiivisia {((good/allClicks.length)*100)} %</p>
        </div>
    )
}

function getSum(array) {
    let sum=0
    for (let i=0; i<array.length; sum += array[i++]);
    return sum
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

    const handleGoodClick = () => {
        setAll(allClicks.concat(1))
        setGood(good+1)
    }
    const handleNeutralClick = () => {
        setAll(allClicks.concat(0))
        setNeutral(neutral+1)
    }  
    const handleBadClick = () => {
        setAll(allClicks.concat(-1))
        setBad(bad+1)
    }

  return (
    <div>
    <h1>anna palautetta</h1>
      <button onClick={handleGoodClick}>hyvä</button>
      <button onClick={handleNeutralClick}>neutraali</button>
      <button onClick={handleBadClick}>huono</button>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)