import React from 'react'
import visualize from '../assets/visualize.jpeg'



export default function Anime() {
    return (
        <div className='anime mySlides fade'>
            <img className='anime-img' src={visualize} alt="visualize" />
            <h3>Visualize data</h3>
            <p>Visualize your order and payment details with graphs and charts.</p>
        </div>
    )
}
