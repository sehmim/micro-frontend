import { ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { createBrowserHistory, History } from "history";
import MicroFrontend from "../../MicroFrontend";

import Layout from '../../layout'

const HomeContainer = styled.div`
    
`

function Products({ history }: any) {
    return <MicroFrontend history={history} host='http://localhost:3001' name="Products" />;
}


function Home(): ReactElement {
    return (
        <Layout>
            <HomeContainer>
                <Products />
            </HomeContainer>
        </Layout>
    )
}

export default Home
