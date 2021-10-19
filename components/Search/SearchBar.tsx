import React, { ChangeEvent, useState } from 'react'

function Search() {
    //const [searchTerms, setSearchTerm] = useState<ISearchTerm>();

    const inputSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
      }

    return (
        <div>
            <input type="text" name="input-term" id="input-term" required placeholder="Search..." onChange={inputSearch} />
        </div>
    )
}

export default Search
