import React from 'react'
import '../styles/body.css'
import logo from '../images/kevin-powell.jpeg'
import kirupa from '../images/kirupa.jpeg'
import denasi from '../images/denasi.jpeg'
import Footer from './footer'

export default function Body() {
    return (
        <>
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
            <h4 className='extras'>Our Courses</h4>
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
            <div className="barnerContainer">
                <div className="barner">
                    <img src={kirupa} alt="member" />
                    <div className="memberinfo">
                        <p> “This is a great way for beginners to learn CSS! Anything that adds gamification and entices people to go deeper without feeling like a "chore" is a great thing!”</p>
                        <p>Kirupa, Founder of kirupa.com</p>
                    </div>
                </div>
            </div>
            <h4 className='extras'>Why buy this course when you can learn CSS for free?</h4>
            <div className="notReplace">
                <p>This course is not there to replace other learning methods. Yes, you can learn CSS for free. But our course is altogether a different experience where you don't have to watch multiple videos or read long articles/documentation to learn. You just sit back, play and learn by doing along the way - hopefully at a much better speed and with more knowledge retention compared to other methods. 🙂</p>

                <p>The cost is just for that new & different experience to learn CSS!</p>
            </div>
            <div className="barnerContainer">
                <div className="barner">
                    <img src={denasi} alt="member" />
                    <div className="memberinfo">
                        <p>“A very interactive course compared to those available from other providers, which feel more like lectures. With an interactive and in-browser embedded coding environment, what more could you ask for? I highly recommend this course to beginners or even coders with some experience who are trying to get back into CSS!”   </p>
                        <p>Dhhyey Desai, Online Instructor (500K+ Students)</p>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}
