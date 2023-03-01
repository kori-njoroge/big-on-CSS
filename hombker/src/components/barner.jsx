import React from 'react'
import barnerImg from '../assets/strawberry.jpeg'

export default function Barner() {
    return (
        <div className='barner'>
            <div className="text">
                <h3>Hello Joanina's, <span>Welcome back!</span></h3>
            </div>
            <div className="image">
                <img src={barnerImg} alt="barner-strawberries" />
            </div>
        </div>
    )
}
