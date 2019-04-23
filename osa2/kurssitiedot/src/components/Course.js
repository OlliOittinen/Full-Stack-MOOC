import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header key={course.id} header={course.name} />
            <Content key={course.name} content={course.parts} />
            <Total key={'total for ' + course.name} parts={course.parts} />
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
        content.map(part => <Part key={part.id} part={part} />)
    )
}

const Part = ({ part }) => {
    return (
        <p key={part.id}>{part.name} {part.exercises}</p>
    )
}

const Total = ({ parts }) => {
    return (<p key={parts.id}>Yhteensä {parts.reduce((sum, part) => sum + part.exercises, 0)} kurssia.</p>
    )
}

export default Course