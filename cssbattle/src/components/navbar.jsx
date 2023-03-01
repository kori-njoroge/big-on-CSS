import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navigation">
                <h4>&#123;X&#125;CSSBattle</h4>
                <h5>/</h5>
                <h5 id='learn'>Learn</h5>
            </div>
            <div className="navRight">
                <button>Sign In &nbsp; / &nbsp;Sign Up</button>
            </div>
        </div>
    )
}
