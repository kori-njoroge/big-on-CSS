import React from 'react'
import '../styles/landingpage.css'



export default function Landingnav() {
    return (
        <div>
            <div className="landnav">
                <div className="navLeft">
                    <h4><span>H</span>ombekr</h4>
                </div>
                <div className="landnavRight">
                    <h5 className="nav-right-item">About</h5>
                    <h5 className="nav-right-item">Features</h5>
                    <h5 className="nav-right-item">Contact Us</h5>
                    <button className="loginbtn">Login</button>
                    <button className="registerbtn">Register</button>
                </div>
            </div>
        </div>
    )
}
