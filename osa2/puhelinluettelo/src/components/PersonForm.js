import React from 'react'

const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, addName }) => {
    return (
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
    )
}

export default PersonForm