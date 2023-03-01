import React, { useState } from 'react'
import '../styles/body.css'
import Barner from './barner'
import CardHead from './cardhead'
import DonutChart from './donut'
import LineGraph from './linegraph'

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

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov'],
        values: [0, 7, 2, 0, 0, 0, 0, 0, 1, 0, 0],
    };




    return (
        <div className='appBody'>
            <Barner />
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
                    <h3 className='cardHead'>Total Sales(29827)</h3>
                    <div className="donut">
                        <DonutChart />
                        <p className='coloLabels'><span className="dot">G</span>Paid(5449)</p>
                        <p className='coloLabels'><span className="doti">G</span>Overdue(19178)</p>
                    </div>
                </div>
                <div className="card">
                    <CardHead title={`Monthly Perfomance`} />
                    <h3 className='cardHead'>Orders 2023</h3>
                    <LineGraph data={data} />
                </div>
            </div>
        </div>
    )
}
