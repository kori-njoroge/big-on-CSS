import React from 'react'
import visualize from '../assets/visualize.jpeg'
import myOrder from '../assets/myOrders.jpeg'
import customers from '../assets/customers.jpeg'
import notifications from '../assets/notifications.jpeg'




export default function Anime() {
    const data = [
        {
            img:visualize,
            title:'Visualize data',
            description:'Visualize your order and payment details with graphs and charts.'
        },
        {
            img:myOrder,
            title:'Manage Orders',
            description:'Add, deliver and cancel orders, view order details and see your upcoming orders.'
        },
        {
            img:customers,
            title:'Manage customers',
            description:'Add, suspend, and delete clients, search for a specific customer or order.'
        },
        {
            img:notifications,
            title:'Send notifications',
            description:'Send notifications'
        }
    ]

    return (
        <div className='anime mySlides fade'>
            <img className='anime-img' src={visualize} alt="visualize" />
            <h3>Visualize data</h3>
            <p>Visualize your order and payment details with graphs and charts.</p>
        </div>
    )
}
