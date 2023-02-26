import React, { useEffect, useState } from 'react'


export default function Anime({ data, index, setIndex }) {
    const indexNum = index
    console.log("yooh", indexNum)
    useEffect(() => {
        // if (indexNum === 3) {
        //     setIndex(0)
        // } else if (indexNum === 0) {
        //     // setIndex(3)
        // }
    }, [])


    return (
        <>
            {data && data.map((item, index) => (
                (index === indexNum ?
                    <div className='anime mySlide fade' key={index}>
                        <img className='anime-img' src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    : '')
            ))}
        </>
    )
}
