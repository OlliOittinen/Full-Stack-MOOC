import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return ( 
    <h1>{props.course.name}</h1>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part.name}, {props.part.exercises}</p>
    )
}

const Total = (props) => {
    let sum = 0
    for(let i=0; i < props.parts.length; i++) {
        sum +=props.parts[i].exercises
    }
    return (
        <p>{sum}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))