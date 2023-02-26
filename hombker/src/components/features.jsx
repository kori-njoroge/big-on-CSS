import React from 'react'
import Anime from './anime'

export default function Features() {
    return (
        <div className='features'>
            <i class="fa-solid fa-list-check fa-3x"></i>
            <h2>Key Features</h2>
            <p>Baked is a web platform, so its accessible from any device anywhere in the world. All you need is an interniet connection</p>
            <div className="ChangeNext">
                <Anime />
                <div className="chevrons">
                    <i class="fa-solid fa-circle-chevron-left  fa-2x"></i>
                    <i class="fa-solid fa-circle-chevron-right fa-2x"></i>
                </div>
            </div>
        </div>
    )
}
