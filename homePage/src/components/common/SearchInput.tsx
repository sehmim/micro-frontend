import React, { ChangeEventHandler, ReactElement } from 'react'

interface Props {
    handleOnChange: ChangeEventHandler<HTMLInputElement>
}

function SearchInput({ handleOnChange }: Props): ReactElement {

    return (
        <div>
            <input onChange={handleOnChange} type="text" placeholder='search...'></input>
        </div>
    )
}

export default SearchInput
