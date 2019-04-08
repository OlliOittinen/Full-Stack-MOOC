import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, bad, neutral, allClicks }) => {
    if (allClicks.length === 0) {
        return <div>
            <p>Ei yhtään palautetta annettu</p>
        </div>
    }
    return (
        <table>
            <tbody>
                <Statistic text="hyvä" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="yhteensä" value={allClicks.length} />
                <Statistic text="keskiarvo" value={(getSum(allClicks) / allClicks.length)} />
                <Statistic text="positiivisia" value={((good / allClicks.length) * 100)} />
            </tbody>
        </table>
    )
}

const Statistic = ({ text, value }) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

function getSum(array) {
    let sum = 0
    for (let i = 0; i < array.length; sum += array[i++]);
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
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setAll(allClicks.concat(0))
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setAll(allClicks.concat(-1))
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>anna palautetta</h1>
            <Button handleClick={handleGoodClick} text='hyvä' />
            <Button handleClick={handleNeutralClick} text='neutraali' />
            <Button handleClick={handleBadClick} text='huono' />
            <h1>statistiikka</h1>
            <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)