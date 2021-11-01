import React, { ChangeEvent } from 'react'
// Style
import style from 'SearchBar.module.scss'

function Search() {
    //const [searchTerms, setSearchTerm] = useState<ISearchTerm>();

    const inputSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
      }

    return (
        <div className="width-100% height-xxxxl padding-xl flex flex-center bg-primary">
            <input className="search-input__input form-control width-60% height-lg radius-full border-black text-sm" type="search" name="input-term" id="input-term" required placeholder="Search..." onChange={inputSearch} />
        </div>
    )
}

export default Search
