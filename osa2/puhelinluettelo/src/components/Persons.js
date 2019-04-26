import React from 'react'

const Persons = ({ persons }) => {
    return (
        persons.map(person =>
            <ul key={person.name}>{person.name} {person.number}</ul>)
    )
}

export default Persons