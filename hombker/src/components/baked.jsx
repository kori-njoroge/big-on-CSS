import React from 'react'
import baked from '../assets/baked.jpeg'

export default function Baked() {
    const question ='What is Baked ?'
    const answer = 'Baked is an online web application created to help home bakers easily manage the important day to day tasks associated with running a successful home or small baking business.'
    const importance = "Baked helps you keep track of all your orders and clients, send SMS notifications, view order dates, payments details and sales data."
    return (
        <>
            <div className='baked'>
                <div className="baked-item-left">
                    <img src={baked} alt="cake dough" />
                </div>
                <div className="baked-item-right">
                    <h2>{question}</h2>
                    <p>{answer}</p>
                    <p>{importance}</p>
                </div>
            </div>
            <hr className='horizontal' />
        </>
    )
}
