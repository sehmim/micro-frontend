import React, { ReactElement, useEffect, useState } from 'react'
import { flushSync } from 'react-dom';
import Layout from '../../layout'
import MicroFrontend from '../../MicroFrontend';

interface Props {

}

function ProductDescription({ history }: any) {
    return <MicroFrontend history={history} host='http://localhost:3002' name="PDPage" />;
}

function PDP(): ReactElement {

    const [productComp, setProductComp] = useState(<ProductDescription />)

    return (
        <Layout>
            <h1>Hi from PDP page</h1>
            {/* <MicroFrontend host='http://localhost:3002' name="PDPage" /> */}
        </Layout>
    )
}

export default PDP
