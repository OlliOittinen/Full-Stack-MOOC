import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])

    const people = () => persons.map(person =>
        <p key={person.name}>{person.name}</p>)

    const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
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
                date: new Date().toISOString(),
                id: persons.length + 1
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
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