import React from 'react'
import Navbar from '../components/navbar';
import Body from '../components/body'

export default function Dashboard() {
    return (
        <>
            <div className="appNav">
                <Navbar />
            </div>
            <div className="applicationcontent">
                <Body />
            </div>
        </>
    )
}
