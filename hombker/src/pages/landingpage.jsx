import React from 'react'
import Baked from '../components/baked'
import Features from '../components/features'
import Landingnav from '../components/landingnav'
import LandTop from '../components/landtop'

export default function Landingpage() {
    return (
        <div>
            <Landingnav />
            <LandTop />
            <Baked />
            <Features />
            <hr className='horizontal' />
        </div>
    )
}
