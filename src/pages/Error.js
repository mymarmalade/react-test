import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return <>
        <div>Error</div>
        <div>404</div>
        <Link to={'/'}>Back Home</Link>
    </>
}

export default Error