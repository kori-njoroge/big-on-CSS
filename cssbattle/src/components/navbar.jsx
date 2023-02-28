import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navigation">
                <h4>CSSBattle</h4>
                <h5>/</h5>
                <h5>Learn</h5>
            </div>
            <div className="navRight">
                <button>Sign In / Sign Up</button>
            </div>
        </div>
    )
}
