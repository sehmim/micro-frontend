import React, { ReactElement } from 'react'
import Layout from '../../layout'
import MicroFrontend from '../../MicroFrontend';

interface Props {

}
function Products({ history }: any) {
    return <MicroFrontend history={history} host='http://localhost:3001' name="Products" />;
}

function Profile({ }: Props): ReactElement {
    return (
        <Layout>
            <Products />
        </Layout>
    )
}

export default Profile
