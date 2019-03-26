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
            <Part part={props.part[0]} exercises={props.exercises[0]} />
            <Part part={props.part[1]} exercises={props.exercises[1]} />
            <Part part={props.part[2]} exercises={props.exercises[2]} />

        </div>
    )
}

const Part = (props) => {
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
            <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
            <Total sum={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))