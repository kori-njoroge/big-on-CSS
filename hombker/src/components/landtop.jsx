import React from 'react';
import baker from '../assets/baker.jpeg';

export default function LandTop() {
    const header = "A software  management system for home bakers"
    const introductory = 'Baked is a sotware for home Bakers all over the world to help manage the admin side of your cake business'
    const newer = '* 3 months free trial for all new users'


    return (
        <>
        <div className='landtopcontainer'>
            <div className="top-item-left">
                <h1>{header}</h1>
                <p>{introductory}</p>
                <button className="hopIn">Login</button>
                <button className="hopIn">Register</button>
                <small>{newer}</small>
            </div>
            <div className="top-item-right">
                <img src={baker} alt="a baker in process" />
            </div>
        </div>
        <hr className='horizontal' />
        </>
    )
}
