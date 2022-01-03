import React, { ChangeEventHandler, ReactElement } from 'react'

interface Props {
    handleOnChange: ChangeEventHandler<HTMLInputElement>
}

function SearchInput({ handleOnChange }: Props): ReactElement {

    return (
        <div data-testid="option-test-2">
            <input data-testid="search-input" onChange={handleOnChange} type="text" placeholder='search...'></input>
        </div>
    )
}

export default SearchInput
