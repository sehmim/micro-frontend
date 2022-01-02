import { ChangeEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
    text-align: right;
    width: 100%;
`

const DropDownListContainer = styled("div")`
    width: 100%;
`;

const DropDownList = styled.select`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: ${props => props.theme.primaryColor};
  box-sizing: border-box;
  color: ${props => props.theme.secondaryColor};
  font-size: 1.3rem;
  z-index: 10;
`;

const ListItem = styled.option`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
  }
`;

type DropDownPropType = {
    initial?: string,
    values: Array<string>,
    onChange: Function
}

export function Dropdown({ initial, values, onChange }: DropDownPropType): ReactElement {

    const [selected, setSelected] = useState(initial)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }

    return (
        <DropDownWrapper>
            {
                <DropDownListContainer>
                    <DropDownList onChange={handleChange}>
                        {
                            values.map((item) => {
                                return (
                                    <ListItem>{item}</ListItem>
                                )
                            })
                        }
                    </DropDownList>
                </DropDownListContainer>
            }
        </DropDownWrapper>
    )
}


export default Dropdown
