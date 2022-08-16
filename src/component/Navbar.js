import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link style={{margin:'5px'}} to={'home'}>Home</Link>
            <Link to={'about'}>about</Link>
        </div>);
}

export default Navbar