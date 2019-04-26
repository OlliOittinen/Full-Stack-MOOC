import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }])

    const people = () => persons.map(person =>
        <ul key={person.name}>{person.name} {person.number}</ul>)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        let filteredPersons = persons.map(person => person.name)
        console.log(filteredPersons.includes(newName))
        if (filteredPersons.includes(newName)) {
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
            <form onSubmit={addName}>
                <div>
                    nimi: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                    numero: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            {people()}
        </div>
    )

}

export default App