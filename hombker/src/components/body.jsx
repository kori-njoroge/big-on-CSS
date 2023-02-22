import React, { useState } from 'react'
import '../styles/body.css'
import CardHead from './cardhead'

export default function Body() {
    const [tableValues, setValues] = useState([
        {
            orderId: 'stsk-9113',
            productName: "Velvet",
            dueTime: '10:12 PM',
            dueDate: '2/25/2023',
            customerName: 'Joanina',
            status: 'NEW',
            amount: 2000,
            amountPaid: 0,
            balance: 2000
        }, {
            orderId: 'stsk-9113',
            productName: "Velvet",
            dueTime: '10:12 PM',
            dueDate: '2/25/2023',
            customerName: 'Joanina',
            status: 'NEW',
            amount: 2000,
            amountPaid: 0,
            balance: 2000
        }, {
            orderId: 'stsk-9113',
            productName: "Velvet",
            dueTime: '10:12 PM',
            dueDate: '2/25/2023',
            customerName: 'Joanina',
            status: 'confirmed',
            amount: 2000,
            amountPaid: 0,
            balance: 2000
        }, {
            orderId: 'stsk-9113',
            productName: "Velvet",
            dueTime: '10:12 PM',
            dueDate: '2/25/2023',
            customerName: 'Joanina',
            status: 'confirmed',
            amount: 2000,
            amountPaid: 0,
            balance: 2000
        }, {
            orderId: 'stsk-9113',
            productName: "Velvet",
            dueTime: '10:12 PM',
            dueDate: '2/25/2023',
            customerName: 'Joanina',
            status: 'confirmed',
            amount: 2000,
            amountPaid: 0,
            balance: 'overpaid'
        }
    ])




    return (
        <div className='appBody'>
            <div className='table'>
                <table>
                    <thead>
                        <tr className='header'>
                            <td>Order #</td>
                            <td>Product</td>
                            <td>Due time</td>
                            <td>Due date</td>
                            <td>Customer</td>
                            <td>status</td>
                            <td>Amount</td>
                            <td>Paid</td>
                            <td>Balance</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableValues && tableValues.map((item, index) => (
                            <tr key={index}>
                                <td className='id'>{item.orderId}</td>
                                <td>{item.productName}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.dueTime}</td>
                                <td>{item.customerName}</td>
                                <td><span className={(item.status).toUpperCase() === 'NEW' ? 'new' : 'confirmed'}>{item.status}</span></td>
                                <td>{item.amount}</td>
                                <td>{item.amountPaid}</td>
                                <td className={typeof (item.balance) === 'string' ? 'overpaid' : 'price'}>{item.balance}</td>
                                <td><button className='viewInfo'>View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="cards">
                <div className="card">
                    <CardHead title={`Orders summary`} />
                    <div className="totals">
                        <p className=''>
                            <span className='total'>Total:</span>
                            <span className='total'>10</span>
                        </p>
                        <p className=''>
                            <span className='upcoming'>Upcoming:</span>
                            <span className='upcoming'>7</span>
                        </p>
                        <p className='upcoming'>
                            <span>Previous:</span>
                            <span>3</span>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <CardHead title={`Finances`} />
                </div>
                <div className="card">
                    <CardHead title={`Monthly Perfomance`} />
                </div>
            </div>
        </div>
    )
}
