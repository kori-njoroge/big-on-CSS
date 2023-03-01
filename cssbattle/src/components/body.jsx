import React from 'react'
import '../styles/body.css'
import logo from '../images/kevin-powell.jpeg'

export default function Body() {
    return (
        <div className='body'>
            <div className="battleLearn text">
                <p id='battles'>CSSBattle's</p>
                <p className='learncss'>"Learn"</p>
            </div>
            <div className=" description">
                <p>CSSBattle's "LEARN" is the first-ever gamified CSS course targeted towards beginners, intermediates, and even experts. Each course consists of multiple levels which you play and learn - just like a game!</p>
            </div>
            <div className="barnerContainer">
                <div className="barner">
                    <img src={logo} alt="member" />
                    <div className="memberinfo">
                        <p> “This is a lot of fun. Nice interactive way to start learning!”</p>
                        <p>Kevin Powell, CSS Evangelist</p>
                    </div>
                </div>
            </div>
            <h4>Our Courses</h4>
            <div className="ourCourses">

            </div>
        </div>
    )
}
