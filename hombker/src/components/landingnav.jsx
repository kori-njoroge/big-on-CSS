import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landingpage.css'



export default function Landingnav() {
    return (
        <div className="appNav">
        <div className="landnav">
            <div className="navLeft">
                <h4><span>H</span>ombekr</h4>
            </div>
            <div className="landnavRight">
                <a className='link' href='#about'><h5 className="nav-right-item"><i className="fa-solid fa-circle-info"></i> About</h5></a>
                <a className='link' href='#features'><h5 className="nav-right-item"><i className="fa-solid fa-list-check"></i> Features</h5></a>
                <a className='link' href='#contactus'><h5 className="nav-right-item"><i className="fa-solid fa-envelope"></i> Contact Us</h5></a>
                <Link className='link' href='#'><button className="loginbtn">Login</button></Link>
                <Link className='link' to={'/dashboard'}><button className="registerbtn">Register</button></Link>
            </div>
        </div>
        </div>
    )
}
