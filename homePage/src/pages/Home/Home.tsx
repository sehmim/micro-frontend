import { ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

// Components 
import { Products } from "../../components/Products"
import { Filters } from '../../components/Filters';

const HomeContainer = styled.div`
    text-align: center;
    border: 1px solid rgba(153,153,153, 0.4);
`

const H1 = styled.h1`
    font-size: 55px;
    font-weight: 500;
    padding: 25px
`

function Home({ history }: { history?: History }): ReactElement {
    const { t } = useTranslation();

    return (
        <HomeContainer>
            <H1>{t('header')}</H1>
            <Filters />
            <Products history={history} />
        </HomeContainer>
    )
}

export default Home
