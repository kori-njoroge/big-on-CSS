import React from 'react'

export default function CardHead() {
    return (
        <div>
            <p>CardHead</p>
            <button className='selectTime'>
                <select name="time" id="time">
                    <option value="This week">This week</option>
                    <option value="This month">This month</option>
                    <option value="This year">This year</option>
                </select>
            </button>
            <hr />
        </div>
    )
}
