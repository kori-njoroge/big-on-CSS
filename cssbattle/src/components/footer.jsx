import React from 'react';
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <p> &copy; 2023 CSSBattle</p>
            <div className="links">
                <p>upgrade to <span>pro</span></p>
                <p>tips & tricks</p>
                <p>learn css</p>
                <p>blog</p>
                <p>FAQS</p>
                <p>community</p>
                <p>about</p>
                <p>sponsor</p>
                <p>privacy & terms</p>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-envelope"></i>
            </div>
        </div>
    )
}
