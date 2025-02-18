import React from 'react';

export const Videos = () => {
    return (
        <section className="contact-section">
            <h2>Get In Touch</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Your Message"></textarea> 
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};
