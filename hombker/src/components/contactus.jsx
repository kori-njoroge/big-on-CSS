import React from 'react'

export default function ContactUs() {
    return (
        <div className='contactUs'>
            <i className="fa-solid fa-envelope fa-3x"></i>
            <h2>Contact Us</h2>
            <p>Do you have any quetions? Please do not hesitate to contact us directly. Our team will come back to help you.</p>
            <form className="contactForm">
                <div className="inputs">
                    <div className="name">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="email">
                        <label htmlFor="email"> Email *</label>
                        <input type="email" name="email" />
                    </div>
                </div>
                <div className="textarea">
                    <label htmlFor="message"> Message *</label>
                    <textarea name="message"></textarea>
                </div>
                <button>Send Message</button>
            </form>
        </div>
    )
}
