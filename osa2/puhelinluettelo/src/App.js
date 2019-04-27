import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    //doesn't work, does nothing atm
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        persons.filter(person => person.name.toLowerCase() !== -1)
        persons.map(person =>
            <ul key={person.name}>{person.name} {person.number}</ul>)
    }

    const addName = (event) => {
        event.preventDefault()

        if ((persons.map(person => person.name)).includes(newName)) {
            if (window.confirm(`${newName} on jo luettelossa, muutetaanko numero?`)) {
                updateNumber()
            }
        }
        else {
            const nameObject = createNameObject()

            personService
                .create(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setErrorMessage(
                        `Henkilö '${nameObject.name}' lisätty!`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                    setNewName('')
                    setNewNumber('')
                })

        }
    }

    const rows = () => persons.map(person =>
        <Person
            key={person.id}
            person={person}
            remove={() => removeName(person.id)}
        />
    )

    const removeName = id => {
        const person = persons.find(n => n.id === id)

        if (window.confirm(`Poistetaanko ${person.name}?`)) {
            personService
                .remove(person.id)
                .then(setPersons(persons.filter(n => n.id !== id)))
            setErrorMessage(
                `Henkilö '${person.name}' poistettu!`
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    const createNameObject = () => {
        return ({
            name: newName,
            number: newNumber,
            date: new Date().toISOString(),
        })
    }

    const updateNumber = () => {
        const number = persons.find(n => n.name === newName)
        const changedNumber = { ...number, number: newNumber }

        personService
            .update(number.id, changedNumber)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id === number.id ? returnedPerson : person))
                setErrorMessage(
                    `Henkilön '${number.name}' numeroa muokattu!`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
            
            .catch(error => {
                alert(`Numero '${number}' on jo valitettavasti poistettu palvelimelta`
                )
                setPersons(persons.filter(n => n.number !== number.number))
            })
    }

    const Notification = ({ message }) => {
        if (message === null) {
            return null
        }

        return (
            <div className="error">
                {message}
            </div>
        )
    }


    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Notification message={errorMessage} />

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
            {rows()}
        </div>
    )

}

export default App