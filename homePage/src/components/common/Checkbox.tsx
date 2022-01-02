import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {

}


const CheckboxWrapper = styled.div`

`


function Checkbox({ }: Props): ReactElement {
    return (
        <CheckboxWrapper>
            <input type="checkbox"></input>
        </CheckboxWrapper>
    )
}

export default Checkbox
