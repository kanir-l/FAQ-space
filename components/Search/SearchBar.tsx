import React, { ChangeEvent } from 'react'
import router from 'next/dist/client/router'
import classnames from 'classnames'
// Interfaces 
import { KeyboardEvent } from 'interfaces/FAQ'

interface Props {
    onChange:(event: ChangeEvent<HTMLInputElement>) => void  
    value: string
}

function Search (props: Props) {
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

    return (
        <div className={box}>
            <input className={input} 
                type="search" 
                name="input-term" 
                id="input-term" 
                placeholder="Search..."
                required 
                value={props.value}
                onChange={props.onChange} 
                data-testid="seach-input"
            />
        </div>
    )
}

export default Search
