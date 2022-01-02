import React, { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
    position: absolute;
`

const DropDownHeader = styled("button")`
    min-width: 200px;
    padding: 0.4em 2em 0.4em 1em;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.secondaryColor};
`;

const DropDownListContainer = styled("div")`
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: ${props => props.theme.primaryColor};
  box-sizing: border-box;
  color: ${props => props.theme.secondaryColor};
  font-size: 1.3rem;
  z-index: 10;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
  }
`;

const langs = ['en', 'fr', 'es']

export function Dropdown(): ReactElement {
    const { i18n } = useTranslation();
    const [show, setShow] = useState(false)

    const updateLang = (lang: string) => {
        i18n.changeLanguage(lang)
        setShow(false)
    }
    return (
        <DropDownWrapper>
            <DropDownHeader onClick={() => setShow(!show)}>Languages</DropDownHeader>
            {
                show &&
                <DropDownListContainer>
                    <DropDownList>
                        {langs.map(lang => (<ListItem key={lang} onClick={() => updateLang(lang)}>{lang}</ListItem>))}
                    </DropDownList>
                </DropDownListContainer>
            }
        </DropDownWrapper>
    )
}


export default Dropdown
