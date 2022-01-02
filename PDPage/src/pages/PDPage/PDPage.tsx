import { ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';


const PDPContainer = styled.div`
    text-align: center;
    border: 1px solid rgba(153,153,153, 0.4);
`

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 700;
    padding: 10px
`
const Filters = styled.div`
    margin: 5px;
    padding: 10px;
    border: 1px solid rgba(153,153,153, 0.2);   
`

function Home(): ReactElement {
    const { t } = useTranslation();

    return (
        <PDPContainer>
            <h1>Product Page</h1>
            <h4>Product Description</h4>
            <p>Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Price: $X.XX</p>
            <img src="https://assets.materialup.com/uploads/3571958b-d6eb-40e1-a39a-aff99b9850e3/preview.png"></img>
        </PDPContainer>
    )
}

export default Home
