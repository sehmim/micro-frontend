import { ReactElement } from 'react'

interface Props {

}

function ErrorFallback({ }: Props): ReactElement {
    return (
        <div>
            Oops! This Page does not exist
        </div>
    )
}

export default ErrorFallback
