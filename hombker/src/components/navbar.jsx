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
                    <p><i className="fa-solid fa-house"></i>Dashboard</p>
                    <p><i className="fa-solid fa-bag-shopping"></i>orders</p>
                    <p><i className="fa-solid fa-user"></i>customize</p>
                    <p className='vertical'></p>
                    <p>welcome Joanina's <i className="fa-solid fa-user"></i></p>
                    <p><i className="fa-solid fa-caret-down"></i></p>
                </div>
            </div>
            <div className="dashboard">
                <p className="dashboardHeading">Dashboard</p>
                <button className="newOrder"><i className="fa-solid fa-plus"></i> New Order</button>
            </div>
        </div>
    )
}
