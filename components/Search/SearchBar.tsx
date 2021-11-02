import React, { ChangeEvent } from 'react'
import router from 'next/dist/client/router'
import classnames from 'classnames'
// Style
import style from 'SearchBar.module.scss'
// Interfaces 
import { KeyboardEvent } from 'interfaces/FAQ'


function Search () {
    // Styles classNames with classnames
    const box = classnames(
        'width-100%', 
        'height-xxxxl', 
        'padding-xl', 
        'flex', 
        'flex-center', 
        'bg-primary'
    )
    const input = classnames(
        'search-input__input', 
        'form-control', 
        'text-sm',
        'width-60%', 
        'height-lg', 
        'radius-full', 
        'border-black', 
    )

    const inputSearch = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            router.push(`/faq/search/${e.target.value}?searchQuery=${e.target.value}`)
          }
      }

    return (
        <div className={box}>
            <input className={input} type="search" name="input-term" id="input-term" required placeholder="Search..."
            onKeyDown={inputSearch} />
        </div>
    )
}

export default Search
