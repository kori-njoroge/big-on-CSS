import React from 'react'

export default function CardHead({ title }) {
    return (
        <div className="card">
            <div>
                <div className="topic">
                    <p>{title}</p>
                    <button className='time'>This week <i className="fa-solid fa-chevron-down"></i></button>
                </div>
                <hr />
            </div>
        </div>
    )
}
