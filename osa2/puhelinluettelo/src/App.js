import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }
    useEffect(hook, [])

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        persons.filter(person => person.name.toLowerCase() !== -1)

        persons.map(person =>
            <ul key={person.name}>{person.name} {person.number}</ul>)
    }

    const addName = (event) => {
        event.preventDefault()

        if ((persons.map(person => person.name)).includes(newName)) {
            alert(`${newName} on jo luettelossa`)
        }
        else {
            const nameObject = {
                name: newName,
                number: newNumber,
                date: new Date().toISOString(),
                id: persons.length + 1
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Filter
                key='filter'
                persons={persons}
                handleSearchChange={handleSearchChange}
                newSearch={newSearch}
            />
            <h3>lisää uusi</h3>
            <PersonForm
                key={PersonForm}
                addName={addName}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numerot</h2>
            <Persons
                key={Persons}
                persons={persons}
            />
        </div>
    )

}

export default App