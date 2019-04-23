import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name} />
            <Content content={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({ header }) => {
    return (
        <h1>{header}</h1>
    )
}
const Content = ({ content }) => {
    return (
        content.map(part => <Part key={part.name} part={part} />)
        )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Total = ({parts}) => {
    return (
        parts.reduce( (sum, part) => sum + part.exercises, 0)
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
            },
            {
                name: 'Redux',
                exercises: 7
            }
        ]
    }

    return (
        <Course course={course} />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))