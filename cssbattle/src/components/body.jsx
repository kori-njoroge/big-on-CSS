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
                <div className="card">
                    <div className="cardtop ">
                        <h3>for beginers</h3>
                        <p>Learn about the basics of CSS and the most commonly used properties.</p>
                    </div>
                    <h5>course stats</h5>
                    <div className="cardBottom">
                        <p>70+ exciting levels!</p>
                        <p>Have a look</p>
                        <button className='buybuy'>Buy Now! - US#4.63</button>
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop topper">
                        <h3>for intermediates</h3>
                        <p>Move a step forward and become a master of layouts.</p>
                    </div>
                    <h5>course stats</h5>
                    <div className="cardBottom">
                        <p className='announce'>to be announced</p>
                        <button className='notifyme'>notify me</button>
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop topper">
                        <h3>for advanced</h3>
                        <p>Learn about some advanced CSS concepts, animations and how to use them.</p>
                    </div>
                    <h5>course stats</h5>
                    <div className="cardBottom">
                        <p className='announce'>to be announced</p>
                        <button className='notifyme'>notify me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
