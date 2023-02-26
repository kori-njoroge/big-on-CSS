import React, { useContext, useEffect, useState } from 'react'
import Anime from './anime'
import visualize from '../assets/visualize.jpeg'
import myOrder from '../assets/myOrders.jpeg'
import customers from '../assets/customers.jpeg'
import notifications from '../assets/notifications.jpeg'

export default function Features() {
    // const myContext = useContext();
    const data = [
        {
            img: visualize,
            title: 'Visualize data',
            description: 'Visualize your order and payment details with graphs and charts.'
        },
        {
            img: myOrder,
            title: 'Manage Orders',
            description: 'Add, deliver and cancel orders, view order details and see your upcoming orders.'
        },
        {
            img: customers,
            title: 'Manage customers',
            description: 'Add, suspend, and delete clients, search for a specific customer or order.'
        },
        {
            img: notifications,
            title: 'Send notifications',
            description: 'Send notifications'
        }
    ]
    const dataLength = data.length;
    const[ index, setIndex] = useState(0);

    useEffect(() =>{
        setTimeout(() => {
            if(index >= 0 && index < dataLength-1){
                setIndex( PrevState => PrevState +1)
            }
            else if( index === dataLength-1 || index >= dataLength ){
                setIndex(0)
            }
        }, 15000);

    },[index])

    console.log(index)
    return (
        <div className='features' id='features'>
            <i class="fa-solid fa-list-check fa-3x"></i>
            <h2>Key Features</h2>
            <p>Baked is a web platform, so its accessible from any device anywhere in the world. All you need is an interniet connection</p>
            <div className="ChangeNext">
                <Anime 
                data={data}
                index={index}
                setIndex ={setIndex} />
                <div className="chevrons">
                    <i
                        class="fa-solid fa-circle-chevron-left  fa-2x"
                        onClick={() => {
                            {index === 0 && setIndex(4)}
                            setIndex( PrevState => PrevState -1)
                            console.log(index)
                        }}
                        ></i>
                    <i
                        class="fa-solid fa-circle-chevron-right fa-2x"
                        onClick={() => {
                            {(index === dataLength-1 || index >= dataLength) && setIndex(-1)}
                            setIndex( prevState =>prevState + 1)
                            console.log(index)
                        }}
                    ></i>
                </div>
            </div>
        </div>
    )
}
