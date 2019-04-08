import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

    function getSum() {
        let sum=0
        for (let i=0; i<allClicks.length; sum += allClicks[i++]);
        return sum/allClicks.length
    }

  return (
    <div>
    <h1>anna palautetta</h1>
      <button onClick={handleGoodClick}>hyvä</button>
      <button onClick={handleNeutralClick}>neutraali</button>
      <button onClick={handleBadClick}>huono</button>

    <h1>statistiikka</h1>
    <p>hyvä {good}</p>
    <p>neutraali {neutral}</p>
    <p>huono {bad}</p>

    <p>yhteensä {allClicks.length-1}</p>
    <p>keskiarvo {getSum()}</p>
    <p>positiivisia {(good/allClicks.length)*100}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)