import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
    const [dropDown, setDropDown] = useState(false)
    return (
        <div className='navbar'>
            <div className="navigation">
                <div className="navLeft">
                    <h4><span>H</span>ombekr</h4>
                </div>
                <div className="navRight">
                    <div className="navbar-icons">
                        <h6><i className="fa-solid fa-house"></i>Dashboard</h6>
                        <h6><i className="fa-solid fa-bag-shopping"></i>orders</h6>
                        <h6><i className="fa-solid fa-user"></i>customers</h6>
                    </div>
                    <div className="dropdown">
                        <div className="child" onClick={() => { setDropDown(prevState => !prevState) }}>
                            <h6 className='vertical'>|</h6>
                            <h6>welcome Joanina's &nbsp; <i className="fa-solid fa-user"></i></h6>
                            <h6><i className="fa-solid fa-caret-down"></i></h6>
                        </div>
                        {dropDown && <div className="dropdown-content">
                            <p><Link><i className="fa-solid fa-gear"></i> &nbsp; Settings </Link></p>
                            <p><Link><i className="fa-solid fa-envelope"></i> &nbsp; Feedback</Link></p>
                            <hr />
                            <p><Link><i className="fa-solid fa-right-from-bracket"></i> &nbsp; Logout</Link></p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="dashboard">
                <p className="dashboardHeading">Dashboard</p>
                <button className="newOrder"><i className="fa-solid fa-plus"></i> New Order</button>
            </div>
        </div>
    )
}
