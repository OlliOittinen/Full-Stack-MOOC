import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
        <h1>{props.course}</h1>
        </div>
    )
}
const Content = (props) => {
    return (
        <div>
        <p>{props.part}, {props.exercises}</p>
        </div>
    )
}
const Total = (props) => {
    return (
        <div>
        <p>{props.sum}</p>
        </div>
        )
}
const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3}/> 
    </div>
  )

/*   return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>yhteensä {exercises1 + exercises2 + exercises3} tehtävää</p>
    </div>
  ) */
}

ReactDOM.render(<App />, document.getElementById('root'))