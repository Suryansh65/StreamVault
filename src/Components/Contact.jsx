import React from 'react';
import "./css/Contact.css";
import Navbar from './Navbar';

const Contact = () => {
    return (
        <>
        <Navbar />
        <div className='contact-container'>
        <h1 className='contact-heading'>Contact Us</h1>
            <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you!<br/><br/>

                Reach Out to Us<br/><br/>

                <strong>Name: Suryansh Agrawal</strong><br/>
                <strong>Email: suryansh652002@gmail.com</strong><br/><br/>
                Feel free to drop us a message using the form below. Whether it's regarding technical support, partnerships, or general inquiries, our team is here to assist you. We strive to respond to all inquiries promptly and look forward to connecting with you!<br/><br/>

                

                Thank you for choosing StreamVault. We value your feedback and are committed to providing you with the best possible experience.</p>
        </div>
        </>
    )
}

export default Contact