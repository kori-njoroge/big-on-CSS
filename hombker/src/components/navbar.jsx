import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navigation">
                <div className="navLeft">
                    <h4><span>H</span>ombekr</h4>
                </div>
                <div className="navRight">
                    <h6><i className="fa-solid fa-house"></i>Dashboard</h6>
                    <h6><i className="fa-solid fa-bag-shopping"></i>orders</h6>
                    <h6><i className="fa-solid fa-user"></i>customers</h6>
                    <h6 className='vertical'>|</h6>
                    <h6>welcome Joanina's &nbsp; <i className="fa-solid fa-user"></i></h6>
                    <h6><i className="fa-solid fa-caret-down"></i></h6>
                </div>
            </div>
            <div className="dashboard">
                <p className="dashboardHeading">Dashboard</p>
                <button className="newOrder"><i className="fa-solid fa-plus"></i> New Order</button>
            </div>
        </div>
    )
}
