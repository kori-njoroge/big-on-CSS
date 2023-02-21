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
        } ,{
            orderId:'stsk-9113',
            productName:"Velvet",
            dueTime:'10:12 PM',
            dueDate:'2/25/2023',
            customerName:'Joanina',
            status:'NEW',
            amount: 2000,
            amountPaid:0,
            balance:2000
        } ,{
            orderId:'stsk-9113',
            productName:"Velvet",
            dueTime:'10:12 PM',
            dueDate:'2/25/2023',
            customerName:'Joanina',
            status:'NEW',
            amount: 2000,
            amountPaid:0,
            balance:2000
        } ,{
            orderId:'stsk-9113',
            productName:"Velvet",
            dueTime:'10:12 PM',
            dueDate:'2/25/2023',
            customerName:'Joanina',
            status:'NEW',
            amount: 2000,
            amountPaid:0,
            balance:2000
        } ,{
            orderId:'stsk-9113',
            productName:"Velvet",
            dueTime:'10:12 PM',
            dueDate:'2/25/2023',
            customerName:'Joanina',
            status:'NEW',
            amount: 2000,
            amountPaid:0,
            balance:2000
        }
    ])




    return (
        <div className='appBody'>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
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
                                <td>{item.orderId}</td>
                                <td>{item.productName}</td>
                                <td>{item.dueTime}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.customerName}</td>
                                <td>{item.status}</td>
                                <td>{item.amount}</td>
                                <td>{item.amountPaid}</td>
                                <td>{item.balance}</td>
                                <td><button className='viewInfo'>View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="cards">
                <CardHead />
            </div>
        </div>
    )
}
