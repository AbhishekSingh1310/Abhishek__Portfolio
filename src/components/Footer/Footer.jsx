import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Abhishek</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/thakur_abhishek_13_/" className="footer__social-link" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/abhishek-singh34/" className="footer__social-link" target="_blank">
                <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/AbhishekSingh1310?tab=repositories" className="footer__social-link" target="_blank">
                <i className="uil uil-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Abhishek Singh. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer