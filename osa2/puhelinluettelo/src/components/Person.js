import React from 'react'

const Person = ({ person, remove }) => {
    const label = 'poista nimi'

    return (
        <ul>
            {person.name} {person.number} 
            <button onClick={remove}>{label}</button>
        </ul>
    )
}

//        <ul key={person.id}>{person.name} {person.number}</ul>)

export default Person