import React from 'react'

const Filter = ({  handleSearchChange, newSearch }) => {
    return (
        <div>
            <h3>etsi!</h3>
            nimi: <input
                value={newSearch}
                onChange={handleSearchChange}
            />
        </div>
    )
}





export default Filter